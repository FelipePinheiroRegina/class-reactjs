import { api } from '@/lib/axios'

interface Params {
  id: string
}

interface ApiResponseGetUserDetailsData {
  pagesRead: number
  reviewedBooks: number
  readAuthors: number
  mostReadCategory: string
}

export async function getUserDetailsData({ id }: Params) {
  const { data } = await api.get<ApiResponseGetUserDetailsData>(
    `/users/${id}/get-user-details-data`,
  )

  return data
}
