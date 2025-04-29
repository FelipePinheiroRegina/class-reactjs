import { api } from '@/lib/axios'

interface Params {
  bookId: string
  description: string
  rate: number
}

export async function createReview({ bookId, description, rate }: Params) {
  const response = await api.post(`/reviews/create-review`, {
    bookId,
    description,
    rate,
  })

  return response
}
