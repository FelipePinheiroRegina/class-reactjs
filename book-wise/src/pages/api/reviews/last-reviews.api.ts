import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  let lastReviewUserLogged = null

  const session = await getServerSession(req, res, authOptions)

  if (session) {
    const lastRating = await prisma.rating.findFirst({
      where: {
        user_id: session.user.id,
      },
      orderBy: {
        created_at: 'desc',
      },
      select: {
        created_at: true,
        book: {
          select: {
            id: true,
            name: true,
            author: true,
            summary: true,
            cover_url: true,
          },
        },
      },
    })

    if (lastRating) {
      const totalRatingBook = await prisma.rating.aggregate({
        _avg: {
          rate: true,
        },
        where: {
          book_id: lastRating.book.id,
        },
      })

      const {
        book: { name, summary, author, cover_url },
        created_at,
      } = lastRating

      lastReviewUserLogged = {
        rate: Math.round(totalRatingBook._avg.rate ?? 0),
        created_at,
        name,
        summary,
        author,
        cover_url,
      }
    }
  }

  const lastRatings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    take: 10,
    select: {
      created_at: true,
      id: true,
      book: {
        select: {
          id: true,
          name: true,
          author: true,
          summary: true,
          cover_url: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
    },
  })

  const lastReviews = await Promise.all(
    lastRatings.map(async (rating) => {
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
        id,
        book: { name, author, summary, cover_url },
        user,
      } = rating

      return {
        review_id: id,
        name,
        author,
        summary,
        cover_url,
        created_at,
        rate: Math.round(avgRate._avg.rate ?? 0),
        user,
      }
    }),
  )

  return res.status(200).json({
    lastReviewUserLogged,
    lastReviews,
  })
}
