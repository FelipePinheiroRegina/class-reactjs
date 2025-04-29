import { api } from '@/lib/axios'
import { Rating } from '@prisma/client'

interface Params {
  bookId: string
}

export interface ApiResponseGetBookById {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  rate: number
  categories: string[]
  ratings: Rating[]
}

export async function getBookById({ bookId }: Params) {
  const { data } = await api.get<ApiResponseGetBookById>(`/books/${bookId}`)

  return data
}
