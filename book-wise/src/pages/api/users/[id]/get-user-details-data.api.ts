import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].api'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schemaQuery = z.object({
  id: z.string(),
})

type UserDetails = Record<string, bigint | string | number>

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

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return res.status(404).json({ message: 'Not found' })
  }

  const [rawUserDetails]: Array<UserDetails> = await prisma.$queryRaw`
  SELECT
    -- SUM UNIQUE PAGES READ
    (
      SELECT 
        SUM(book_data.total_pages)
      FROM (
        SELECT DISTINCT ON (RA.book_id)
          B.total_pages
        FROM ratings RA
        JOIN books B ON B.id = RA.book_id
        WHERE RA.user_id = ${user.id}
        ORDER BY RA.book_id, RA.created_at DESC
      ) AS book_data
    ) AS "pagesRead",
    
    -- COUNT UNIQUE READ AUTHOR
    (
      SELECT COUNT(DISTINCT book_data.author)
      FROM (
        SELECT DISTINCT ON (RA.book_id)
          B.author
        FROM ratings RA
        JOIN books B ON B.id = RA.book_id
        WHERE RA.user_id = ${user.id}
        ORDER BY RA.book_id, RA.created_at DESC
      ) AS book_data
    ) AS "readAuthors",

    -- COUNT TOTAL REVIEWED BOOKS
    (
      SELECT COUNT(*)
      FROM ratings R
      WHERE R.user_id = ${user.id}
    ) AS "reviewedBooks",

    -- GET NAME MOST READ CATEGORY
    (
      SELECT cat.name
      FROM (
        SELECT C."categoryId"
        FROM ratings RA
        JOIN books B ON B.id = RA.book_id
        JOIN categories_on_books C ON C.book_id = RA.book_id
        WHERE RA.user_id = ${user.id}
      ) AS book_data
      JOIN categories cat ON cat.id = book_data."categoryId"
      GROUP BY cat.name
      ORDER BY COUNT(*) DESC
      LIMIT 1
    ) AS "mostReadCategory"
  `

  const userDetails: UserDetails = {}

  for (const [key, value] of Object.entries(rawUserDetails)) {
    userDetails[key] = typeof value === 'bigint' ? Number(value) : value
  }

  return res.status(200).json(userDetails)
}
