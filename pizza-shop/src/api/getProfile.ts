import { api } from '@/lib/axios'

export interface GetProfileBody {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileBody>('me')

  return response.data
}
