import { api } from '@/lib/axios'

export interface GetMangedRestaurantResponse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getMangedRestaurant() {
  const response = await api.get<GetMangedRestaurantResponse>('managed-restaurant')

  return response.data
}
