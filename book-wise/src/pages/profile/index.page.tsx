import { Heading } from '@/components/Heading'
import {
  ProfileContainer,
  Content,
  ProfileDetails,
  DividingLine,
  Reviews,
  UserDetails,
  BooksDetails,
  Detail,
} from './styles'
import { Nav } from '@/components/Nav'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  CaretLeft,
  MagnifyingGlass,
  User,
  UserList,
} from '@phosphor-icons/react'
import { TextInput } from '@/components/TextInput'
import { CardReview } from './components/CardReview'
import { Text } from '@/components/Text'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { NextSeo } from 'next-seo'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { getUserBooks } from '@/api/get-user-books'
import { getUserProfileData } from '@/api/get-user-profile-data'
import { useSession } from 'next-auth/react'
import dayjs from 'dayjs'
import { getUserDetailsData } from '@/api/get-user-details-data'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BooksNotFound } from './components/BooksNotFound'

const schemaSearch = z.object({
  search: z
    .string({ message: 'Please fill the field before search' })
    .transform((value) => encodeURIComponent(value)),
})

type SchemaSearch = z.infer<typeof schemaSearch>

export default function Profile() {
  const router = useRouter()
  const otherUserId = router.query.id as string | undefined
  const search = decodeURIComponent(String(router.query.search ?? ''))
  const { status, data } = useSession()
  const userId = otherUserId ?? data?.user.id
  const queryClient = useQueryClient()

  const { register, handleSubmit } = useForm<SchemaSearch>({
    resolver: zodResolver(schemaSearch),
    values: {
      search: search,
    },
  })

  const { data: userBooksData } = useQuery({
    queryKey: ['get-user-books', userId, search],
    queryFn: () => getUserBooks({ id: userId as string, search }),
    enabled: !!userId && status !== 'loading',
  })

  const { data: getUserProfileDataRes } = useQuery({
    queryKey: ['get-user-profile-data', userId],
    queryFn: () => getUserProfileData({ id: userId as string }),
    enabled: !!userId && status !== 'loading',
  })

  const { data: getUserDetailsDataRes } = useQuery({
    queryKey: ['get-user-details-data', userId],
    queryFn: () => getUserDetailsData({ id: userId as string }),
    enabled: !!userId && status !== 'loading',
  })

  function handleSearchParams(data: SchemaSearch) {
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
      queryKey: ['get-user-books', userId, search],
    })
  }

  if (status === 'loading') {
    return <div>CARREGANDO...</div>
  }

  return (
    <>
      <NextSeo title="Profile | BookWise" />
      <ProfileContainer>
        <Nav user={data?.user ? data.user : null} />
        <Content>
          {otherUserId ? (
            <Link href="/home">
              <CaretLeft />
              Previous
            </Link>
          ) : (
            <Heading size="2xl">
              <User />
              Profile
            </Heading>
          )}

          <div className="flex-row">
            <Reviews>
              <form
                onSubmit={handleSubmit(handleSearchParams)}
                onBlur={handleSubmit(handleSearchParams)}
              >
                <TextInput
                  placeholder="Search for name book or name author"
                  icon={MagnifyingGlass}
                  {...register('search')}
                />
              </form>

              {userBooksData && userBooksData?.length > 0 ? (
                userBooksData.map((book) => (
                  <div className="gap" key={book.book_id}>
                    <Text size="sm" as="time">
                      {dayjs(new Date(book.created_at)).fromNow()}
                    </Text>
                    <CardReview
                      author={book.author}
                      name={book.name}
                      averageRate={book.averageRate}
                      cover_url={book.cover_url}
                      summary={book.summary}
                    />
                  </div>
                ))
              ) : (
                <BooksNotFound />
              )}
            </Reviews>

            <ProfileDetails>
              <UserDetails>
                <Avatar
                  src={getUserProfileDataRes?.image ?? ''}
                  alt={`image profile ${getUserProfileDataRes?.name}`}
                />

                <div className="user">
                  <Text as="strong" size="xl">
                    {getUserProfileDataRes?.name ?? ''}
                  </Text>
                  <Text size="sm">
                    {`
                    Member since 
                    ${dayjs(new Date(getUserProfileDataRes?.created_at ?? new Date())).get('year')}`}
                  </Text>
                </div>
              </UserDetails>
              <DividingLine />
              <BooksDetails>
                <Detail>
                  <BookOpen />
                  <div>
                    <Text as="strong">
                      {getUserDetailsDataRes?.pagesRead ?? 0}
                    </Text>
                    <Text size="sm">Pages read</Text>
                  </div>
                </Detail>
                <Detail>
                  <Books />
                  <div>
                    <Text as="strong">
                      {getUserDetailsDataRes?.reviewedBooks ?? 0}
                    </Text>
                    <Text size="sm">Reviewed books</Text>
                  </div>
                </Detail>
                <Detail>
                  <UserList />
                  <div>
                    <Text as="strong">
                      {getUserDetailsDataRes?.readAuthors ?? 0}
                    </Text>
                    <Text size="sm">Read authors</Text>
                  </div>
                </Detail>
                <Detail>
                  <BookmarkSimple />
                  <div>
                    <Text as="strong">
                      {getUserDetailsDataRes?.mostReadCategory ?? ''}
                    </Text>
                    <Text size="sm">Most read category</Text>
                  </div>
                </Detail>
              </BooksDetails>
            </ProfileDetails>
          </div>
        </Content>
      </ProfileContainer>
    </>
  )
}
