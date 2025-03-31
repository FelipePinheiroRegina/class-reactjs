import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const timeIntervalsBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTime: z.string(),
      endTime: z.string(),
      startTimeInMinutes: z.number(),
      endTimeInMinutes: z.number(),
      enabled: z.boolean(),
    }),
  ),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    res.status(401).end()
    return
  }

  const { intervals } = timeIntervalsBodySchema.parse(req.body)

  await prisma.userTimeInterval.createMany({
    data: intervals.map((interval) => {
      return {
        user_id: session.user.id,
        week_day: interval.weekDay,
        time_start_in_minutes: interval.startTimeInMinutes,
        time_end_in_minutes: interval.endTimeInMinutes,
      }
    }),
  })

  res.status(201).end()
}
