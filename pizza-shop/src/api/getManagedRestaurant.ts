import { api } from '@/lib/axios'

export interface GetMangedRestaurantBody {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getMangedRestaurant() {
  const response = await api.get<GetMangedRestaurantBody>('managed-restaurant')

  return response.data
}
