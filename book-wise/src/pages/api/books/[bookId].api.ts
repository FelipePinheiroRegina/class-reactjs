import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const schemaQuery = z.object({
  bookId: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { bookId } = schemaQuery.parse(req.query)

  const bookPrisma = await prisma.book.findUniqueOrThrow({
    where: { id: bookId },
    include: {
      ratings: true,
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  const totalRate = bookPrisma.ratings.reduce((acc, rating) => {
    return acc + rating.rate
  }, 0)

  const rate = Math.ceil(totalRate / bookPrisma.ratings.length)

  const categories = bookPrisma.categories.map((item) => {
    return item.category.name
  })

  const { id, summary, author, cover_url, name, ratings, total_pages } =
    bookPrisma

  const book = {
    id,
    name,
    author,
    summary,
    cover_url,
    total_pages,
    rate,
    categories,
    ratings,
  }

  return res.status(200).json(book)
}
