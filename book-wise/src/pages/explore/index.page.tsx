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
import { useQuery } from '@tanstack/react-query'
import { getBooks } from '@/api/get-books'
import { getCategories } from '@/api/get-categories'
import { useRouter } from 'next/router'
import { Pagination } from '@/components/Pagination'

export default function Explore() {
  const router = useRouter()
  const { data } = useSession()
  const [openDrawerBook, setOpenDrawerBook] = useState<DrawerOpenChangeDetails>(
    { open: false },
  )
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [categories, setCategories] = useState<string[]>([])
  const initialized = useRef(false)
  const handleOpenChange = (value: DrawerOpenChangeDetails) => {
    setOpenDrawerBook({ open: value.open })
  }

  const { data: booksData } = useQuery({
    queryKey: ['get-books', page, categories, search],
    queryFn: async () => await getBooks({ page, categories, search }),
    enabled: router.isReady,
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['get-categories'],
    queryFn: async () => await getCategories(),
    enabled: router.isReady,
  })

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

    let replica: string[] = []
    setCategories((state) => {
      if (state.includes(category)) {
        const filtered = state.filter((item) => item !== category)
        replica = filtered
        return filtered
      }
      replica = [...state, category]
      return [...state, category]
    })

    const query = {
      ...router.query,
      categories: replica.join(','),
    }

    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true },
    )
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

      <DrawerBook open={openDrawerBook.open} onOpenChange={handleOpenChange} />

      <ExploreContainer>
        <Nav user={data?.user ?? null} />
        <Content>
          <Header>
            <Heading size="2xl">
              <Binoculars /> Explore
            </Heading>
            <div className="input-container">
              <TextInput
                placeholder="search for book or author"
                icon={MagnifyingGlass}
              />
            </div>
          </Header>
          <Categories>
            {router.isReady ? (
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
            ) : (
              <> CARREGANDO...</>
            )}
          </Categories>
          <Books>
            {booksData ? (
              booksData.books.length > 0 ? (
                booksData.books.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    imageSize="large"
                    onClick={() => handleOpenChange({ open: true })}
                  />
                ))
              ) : (
                <>NÃO TEM</>
              )
            ) : (
              <>CARREGANDO...</>
            )}
          </Books>
          {/* <Pagination
            page={page}
            onPageChange={(e) => console.log(e)}
            count={10}
          /> */}
        </Content>
      </ExploreContainer>
    </>
  )
}
