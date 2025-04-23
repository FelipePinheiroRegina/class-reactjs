import { api } from '@/lib/axios'
import { Prisma } from '@prisma/client'

interface Params {
  id: string
}

export async function getUserProfileData({ id }: Params) {
  const { data } = await api.get<Prisma.UserCreateInput>(
    `/users/${id}/get-user-profile-data`,
  )

  return data
}
