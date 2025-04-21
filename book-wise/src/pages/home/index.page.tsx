import { Heading } from '@/components/Heading'
import {
  HomeContainer,
  Reviews,
  Content,
  LatestReviews,
  PopularBooks,
} from './styles'
import { Nav } from '@/components/Nav'
import { CardReview } from './components/CardReview'
import { Book } from '@/components/Book'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { Text } from '@/components/Text'
import { Link } from '@/components/Link'
import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import { getServerSession, User } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].api'
import { LastReview } from './components/LastReview'
import axios from 'axios'
import { env } from '../env'

interface Root {
  lastReviewUserLogged: LastReviewUserLogged | null
  lastReviews: LastReviews[] | null | undefined
}

export interface LastReviewUserLogged {
  rate: number
  created_at: string
  name: string
  summary: string
  author: string
  cover_url: string
}

export interface LastReviews {
  review_id: string
  name: string
  author: string
  summary: string
  cover_url: string
  created_at: string
  rate: number
  user: User
}

export interface PopularBook {
  id: string
  cover_url: string
  name: string
  author: string
  rate: number
}

interface HomeProps {
  user: User | null
  lastReviews: Root
  popularBooks: PopularBook[]
}

export default function Home({ user, lastReviews, popularBooks }: HomeProps) {
  return (
    <>
      <NextSeo title="Home | BookWise" />
      <HomeContainer>
        <Nav user={user} />
        <Content>
          <Heading as="h1" size="2xl">
            <ChartLineUp /> Home
          </Heading>

          <div className="two-columns">
            <Reviews>
              {lastReviews.lastReviewUserLogged && (
                <div>
                  <div className="space-between">
                    <Text size="sm">Your last reading</Text>
                    <Link href="/profile" variant="secondary" size="sm">
                      See all <CaretRight />
                    </Link>
                  </div>

                  <LastReview props={lastReviews.lastReviewUserLogged} />
                </div>
              )}

              <LatestReviews>
                <div className="space-between">
                  <Text size="sm">Latest reviews</Text>
                </div>

                {lastReviews.lastReviews &&
                  lastReviews.lastReviews.map((review) => (
                    <CardReview key={review.review_id} props={review} />
                  ))}
              </LatestReviews>
            </Reviews>

            <div>
              <div className="space-between">
                <Text size="sm">Popular books</Text>
                <Link href="/explore" variant="secondary" size="sm">
                  See all <CaretRight />
                </Link>
              </div>
              <PopularBooks>
                {popularBooks &&
                  popularBooks.map((book) => (
                    <Book key={book.id} book={book} />
                  ))}
              </PopularBooks>
            </div>
          </div>
        </Content>
      </HomeContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const { data: lastReviews } = await axios.get(
    `${env.NEXTAUTH_URL}/api/reviews/last-reviews`,
    {
      headers: {
        Cookie: req.headers.cookie || '',
      },
    },
  )

  const { data: popularBooks } = await axios.get(
    `${env.NEXTAUTH_URL}/api/books/popular-books`,
  )

  return {
    props: {
      user: session?.user
        ? {
            id: session?.user.id,
            name: session?.user.name,
            email: session?.user.email,
            image: session?.user.image,
          }
        : null,
      lastReviews,
      popularBooks,
    },
  }
}
