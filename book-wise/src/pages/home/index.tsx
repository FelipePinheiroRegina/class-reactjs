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

export default function Home() {
  const user = false
  return (
    <>
      <NextSeo title="Home | BookWise" />
      <HomeContainer>
        <Nav />
        <Content>
          <Heading as="h1" size="2xl">
            <ChartLineUp /> Home
          </Heading>

          <div className="two-columns">
            <Reviews>
              {user && (
                <div>
                  <div className="space-between">
                    <Text size="sm">Your last reading</Text>
                    <Link href="/" variant="secondary" size="sm">
                      See all <CaretRight />
                    </Link>
                  </div>

                  <CardReview user={user} />
                </div>
              )}

              <LatestReviews>
                <div className="space-between">
                  <Text size="sm">Latest reviews</Text>
                </div>

                <CardReview />
                <CardReview />
              </LatestReviews>
            </Reviews>

            <div>
              <div className="space-between">
                <Text size="sm">Popular books</Text>
                <Link href="/" variant="secondary" size="sm">
                  See all <CaretRight />
                </Link>
              </div>
              <PopularBooks>
                <Book />
              </PopularBooks>
            </div>
          </div>
        </Content>
      </HomeContainer>
    </>
  )
}
