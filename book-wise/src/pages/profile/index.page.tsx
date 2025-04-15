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

export default function Profile() {
  const otherProfile = false
  return (
    <>
      <NextSeo title="Profile | BookWise" />
      <ProfileContainer>
        <Nav />
        <Content>
          {otherProfile ? (
            <Link href="/">
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

              <div className="gap">
                <Text size="sm" as="time">
                  2 days ago
                </Text>
                <CardReview />
              </div>
              <div className="gap">
                <Text size="sm" as="time">
                  2 days ago
                </Text>
                <CardReview />
              </div>
            </Reviews>

            <ProfileDetails>
              <UserDetails>
                <Avatar
                  src="https://github.com/FelipePinheiroRegina.png"
                  alt="Felipe Pinheiro"
                />

                <div className="user">
                  <Text as="strong" size="xl">
                    Felipe Pinheiro
                  </Text>
                  <Text size="sm">Member since 2019</Text>
                </div>
              </UserDetails>
              <DividingLine />
              <BooksDetails>
                <Detail>
                  <BookOpen />
                  <div>
                    <Text as="strong">3853</Text>
                    <Text size="sm">Pages read</Text>
                  </div>
                </Detail>
                <Detail>
                  <Books />
                  <div>
                    <Text as="strong">10</Text>
                    <Text size="sm">Reviewed books</Text>
                  </div>
                </Detail>
                <Detail>
                  <UserList />
                  <div>
                    <Text as="strong">8</Text>
                    <Text size="sm">Read authors</Text>
                  </div>
                </Detail>
                <Detail>
                  <BookmarkSimple />
                  <div>
                    <Text as="strong">Computing</Text>
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
