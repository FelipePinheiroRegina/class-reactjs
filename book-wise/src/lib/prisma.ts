// import { PrismaClient } from '../generated/client'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'],
})
