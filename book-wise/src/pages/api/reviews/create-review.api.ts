import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].api'
import { z } from 'zod'

const schemaCreateReview = z.object({
  bookId: z.string(),
  description: z.string(),
  rate: z.coerce.number(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { bookId, description, rate } = schemaCreateReview.parse(req.body)

  await prisma.rating.create({
    data: {
      rate,
      description,
      book_id: bookId,
      user_id: session.user.id,
    },
  })

  res.status(201).end()
}
