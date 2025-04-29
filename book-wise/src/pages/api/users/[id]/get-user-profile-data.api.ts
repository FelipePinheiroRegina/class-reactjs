import type { NextApiRequest, NextApiResponse } from 'next'
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

  const { id } = schemaQuery.parse(req.query)

  const userProfileData = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  return res.status(200).json(userProfileData)
}
