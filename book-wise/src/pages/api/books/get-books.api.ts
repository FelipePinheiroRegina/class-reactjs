import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const schemaQuery = z.object({
  categoriesParams: z
    .string()
    .optional()
    .transform((value) => (value ? JSON.parse(value) : undefined)),
  page: z.coerce.number(),
  search: z
    .string()
    .optional()
    .transform((value) => (value ? decodeURIComponent(value) : undefined)),
})

const booksPerPage = 9

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { page, categoriesParams, search } = schemaQuery.parse(req.query)

  const booksPrisma = await prisma.book.findMany({
    where: {
      AND: [
        {
          OR: [
            { author: { contains: search ?? undefined, mode: 'insensitive' } },
            { name: { contains: search ?? undefined, mode: 'insensitive' } },
          ],
        },
        {
          categories: {
            some: {
              category: {
                name: {
                  in: categoriesParams,
                },
              },
            },
          },
        },
      ],
    },
    skip: page * booksPerPage,
    take: booksPerPage,
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
  })

  const totalBooksCount = await prisma.book.count({
    where: {
      AND: [
        {
          OR: [
            { author: { contains: search ?? undefined, mode: 'insensitive' } },
            { name: { contains: search ?? undefined, mode: 'insensitive' } },
          ],
        },
        {
          categories: {
            some: {
              category: {
                name: {
                  in: categoriesParams,
                },
              },
            },
          },
        },
      ],
    },
  })

  const books = booksPrisma.map((book) => {
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
  const totalPages = Math.ceil(totalBooksCount / booksPerPage)
  return res.status(200).json({ books, totalPages })
}
