import { api } from '@/lib/axios'

interface Params {
  id: string
}

export interface ApiResponseGetAllUserBooks {
  book_id: string
  author: string
  cover_url: string
  name: string
  summary: string
  averageRate: number
  created_at: string
}

export async function getAllUserBooks({ id }: Params) {
  const { data } = await api.get<ApiResponseGetAllUserBooks[]>(
    `/users/${id}/get-all-books`,
  )

  return data
}
