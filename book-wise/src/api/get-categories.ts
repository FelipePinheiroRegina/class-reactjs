import { api } from '@/lib/axios'

export async function getCategories() {
  const { data } = await api.get<{ id: string; name: string }[]>(
    `/categories/get-categories`,
  )

  return data
}
