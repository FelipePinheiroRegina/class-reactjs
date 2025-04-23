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
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { getAllUserBooks } from '@/api/get-all-user-books'
import { getUserProfileData } from '@/api/get-user-profile-data'
import { useSession } from 'next-auth/react'
import dayjs from 'dayjs'
import { getUserDetailsData } from '@/api/get-user-details-data'

export default function Profile() {
  const router = useRouter()
  const otherUserId = router.query.id as string | undefined
  const { status, data } = useSession()
  const userId = otherUserId ?? data?.user.id

  const { data: allUserBooks } = useQuery({
    queryKey: ['get-all-user-books', userId],
    queryFn: () => getAllUserBooks({ id: userId as string }),
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
              <TextInput
                placeholder="Search for reviewed book"
                icon={MagnifyingGlass}
              />

              {allUserBooks &&
                allUserBooks.map((book) => (
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
                ))}
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
