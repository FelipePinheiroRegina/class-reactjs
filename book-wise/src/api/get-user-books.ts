import { api } from '@/lib/axios'

interface Params {
  id: string
  search?: string
}

export interface ApiResponseGetUserBooks {
  book_id: string
  author: string
  cover_url: string
  name: string
  summary: string
  averageRate: number
  created_at: string
}

export async function getUserBooks({ id, search }: Params) {
  const { data } = await api.get<ApiResponseGetUserBooks[]>(
    `/users/${id}/get-user-books?search=${search}`,
  )

  return data
}
