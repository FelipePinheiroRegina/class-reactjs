import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].api'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schemaQuery = z.object({
  id: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).json({ message: 'unauthorized' })
    return
  }

  const { id } = schemaQuery.parse(req.query)

  const allRatings = await prisma.rating.findMany({
    where: {
      user_id: id,
    },
    orderBy: {
      created_at: 'asc',
    },
    include: {
      book: true,
    },
  })

  const uniqueRatingsByBook = Object.values(
    allRatings.reduce(
      (acc, rating) => {
        const bookId = rating.book.id
        if (!acc[bookId]) {
          acc[bookId] = rating
        }
        return acc
      },
      {} as Record<string, (typeof allRatings)[number]>,
    ),
  )

  const allUserBooks = await Promise.all(
    uniqueRatingsByBook.map(async (rating) => {
      const avgRate = await prisma.rating.aggregate({
        where: {
          book_id: rating.book.id,
        },
        _avg: {
          rate: true,
        },
      })

      const {
        created_at,
        book: { id: book_id, author, cover_url, name, summary },
      } = rating

      return {
        book_id,
        author,
        cover_url,
        name,
        summary,
        averageRate: Math.round(avgRate._avg.rate ?? 0),
        created_at,
      }
    }),
  )

  return res.status(200).json(allUserBooks)
}
