import { NextSeo } from 'next-seo'
import { ExploreContainer, Content, Header, Books, Categories } from './styles'
import { Nav } from '@/components/Nav'
import { Heading } from '@/components/Heading'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { TextInput } from '@/components/TextInput'
import { Tag } from '@/components/Tag'
import { Book } from '@/components/Book'
import { DrawerBook } from './components/DrawerBook'
import { useEffect, useRef, useState } from 'react'
import { DrawerOpenChangeDetails } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getBooks } from '@/api/get-books'
import { getCategories } from '@/api/get-categories'
import { useRouter } from 'next/router'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaForm = z.object({
  search: z.string(),
})

type SchemaForm = z.infer<typeof schemaForm>

export default function Explore() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const search = decodeURIComponent(String(router.query.search ?? ''))
  const { data } = useSession()
  const [openDrawerBook, setOpenDrawerBook] = useState<DrawerOpenChangeDetails>(
    { open: false },
  )
  const [bookId, setBookId] = useState<string | null>(null)
  const page = 0
  const [categories, setCategories] = useState<string[]>([])
  const initialized = useRef(false)

  const handleOpenChange = (value: DrawerOpenChangeDetails) => {
    setOpenDrawerBook({ open: value.open })
  }

  const { register, handleSubmit } = useForm<SchemaForm>({
    resolver: zodResolver(schemaForm),
    values: {
      search: search,
    },
  })

  const { data: booksData, isLoading: isLoadingBooksData } = useQuery({
    queryKey: ['get-books', page, categories, search],
    queryFn: async () => await getBooks({ page, categories, search }),
    enabled: router.isReady,
  })

  const { data: categoriesData, isLoading: isLoadingCategoriesData } = useQuery(
    {
      queryKey: ['get-categories'],
      queryFn: async () => await getCategories(),
      enabled: router.isReady,
    },
  )

  function handleCategoriesParams(category: string) {
    if (category === 'all') {
      setCategories([])

      // eslint-disable-next-line
      const { categories, ...queries } = router.query

      router.push(
        {
          pathname: router.pathname,
          query: queries,
        },
        undefined,
        { shallow: true },
      )

      return
    }

    setCategories((state) => {
      if (state.includes(category)) {
        const filtered = state.filter((item) => item !== category)

        const query = {
          ...router.query,
          categories: filtered.join(','),
        }

        router.push(
          {
            pathname: router.pathname,
            query,
          },
          undefined,
          { shallow: true },
        )

        return filtered
      }

      const query = {
        ...router.query,
        categories: [...state, category].join(','),
      }

      router.push(
        {
          pathname: router.pathname,
          query,
        },
        undefined,
        { shallow: true },
      )

      return [...state, category]
    })
  }

  function handleSearch(data: SchemaForm) {
    const query = {
      ...router.query,
      search: data.search || undefined,
    }

    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true },
    )

    queryClient.invalidateQueries({
      queryKey: ['get-books', page, categories, search],
    })
  }

  function handleOpenDrawer(bookId: string) {
    setBookId(bookId)
    handleOpenChange({ open: true })
  }

  useEffect(() => {
    if (initialized.current || !router.isReady) return

    const current = router.query.categories

    if (!current) return

    const currentCategories = Array.isArray(current)
      ? current.flatMap((c) => c.split(','))
      : (current?.split(',') ?? [])

    setCategories(currentCategories)
    initialized.current = true
  }, [router.isReady, router.query.categories])

  return (
    <>
      <NextSeo title="Explore | BookWise" />

      {bookId && (
        <DrawerBook
          open={openDrawerBook.open}
          onOpenChange={handleOpenChange}
          bookId={bookId}
          user={data?.user ?? null}
        />
      )}

      <ExploreContainer>
        <Nav user={data?.user ?? null} />
        <Content>
          <Header>
            <Heading size="2xl">
              <Binoculars /> Explore
            </Heading>
            <form
              className="form"
              onSubmit={handleSubmit(handleSearch)}
              onBlur={handleSubmit(handleSearch)}
            >
              <TextInput
                placeholder="search for book or author"
                icon={MagnifyingGlass}
                {...register('search')}
              />
            </form>
          </Header>
          <Categories>
            {isLoadingCategoriesData ? (
              <> CARREGANDO... </>
            ) : (
              <>
                <Tag
                  data-checked={categories.length === 0}
                  onClick={() => handleCategoriesParams('all')}
                >
                  All
                </Tag>
                {categoriesData &&
                  categoriesData?.length > 0 &&
                  categoriesData.map((category) => (
                    <Tag
                      data-checked={categories.includes(category.name)}
                      key={category.id}
                      onClick={() => handleCategoriesParams(category.name)}
                    >
                      {category.name}
                    </Tag>
                  ))}
              </>
            )}
          </Categories>
          <Books>
            {isLoadingBooksData ? (
              <> CARREGANDO... </>
            ) : booksData && booksData.books.length > 0 ? (
              booksData.books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  imageSize="large"
                  onClick={() => handleOpenDrawer(book.id)}
                />
              ))
            ) : (
              <> NÃO TEM </>
            )}
          </Books>
        </Content>
      </ExploreContainer>
    </>
  )
}
