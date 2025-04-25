import { api } from '@/lib/axios'

interface Params {
  page: number
  categories: string[]
  search?: string
}

export async function getBooks({ page, categories, search }: Params) {
  const { data } = await api.get<{ books: ShortBook[]; totalPages: number }>(
    `/books/get-books`,
    {
      params: {
        page,
        search,
        categoriesParams:
          categories?.length > 0 ? JSON.stringify(categories) : null,
      },
    },
  )

  return data
}
