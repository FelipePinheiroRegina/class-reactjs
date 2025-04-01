import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import dayjs from 'dayjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }

  const username = String(req.query.username)
  const { date } = req.query

  if (!date) {
    res.status(400).json({ message: 'Date is required' })
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  const referenceDate = dayjs(String(date))
  const isPastDate = referenceDate.endOf('day').isBefore(new Date())

  if (isPastDate) {
    res.json({ availability: { possibleTimes: [], availableTimes: [] } })
    return
  }

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: referenceDate.get('day'),
    },
  })

  if (!userAvailability) {
    res.json({ availability: { possibleTimes: [], availableTimes: [] } })
    return
  }

  const { time_start_in_minutes, time_end_in_minutes } = userAvailability
  const startHour = time_start_in_minutes / 60
  const endHour = time_end_in_minutes / 60

  const possibleTimes = Array.from({ length: endHour - startHour }).map(
    (_, i) => {
      return startHour + i
    },
  )

  const blockedTimes = await prisma.scheduling.findMany({
    select: {
      date: true,
    },
    where: {
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startHour).toDate(),
        lte: referenceDate.set('hour', endHour).toDate(),
      },
    },
  })

  const availableTimes = possibleTimes.filter((time) => {
    return !blockedTimes.some(
      (blockedTime) => blockedTime.date.getHours() === time,
    )
  })

  res.status(200).json({ possibleTimes, availableTimes })
}
