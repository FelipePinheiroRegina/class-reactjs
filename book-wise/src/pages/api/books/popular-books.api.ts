import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const popularBooksPrisma = await prisma.book.findMany({
    take: 5,
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })

  const popularBooks = popularBooksPrisma.map((book) => {
    const totalRatings = book.ratings.reduce((acc, rating) => {
      return acc + rating.rate
    }, 0)

    const rate =
      book.ratings.length > 0 ? totalRatings / book.ratings.length : 0

    const { id, cover_url, name, author } = book

    return {
      id,
      cover_url,
      name,
      author,
      rate: Math.round(rate),
    }
  })

  return res.status(200).json(popularBooks)
}
