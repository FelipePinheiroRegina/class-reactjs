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

  const userProfileData = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  return res.status(200).json(userProfileData)
}
