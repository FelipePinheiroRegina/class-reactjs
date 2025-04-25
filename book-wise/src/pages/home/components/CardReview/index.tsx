import { Avatar } from '@/components/Avatar'
import {
  AuthorDetails,
  CardReviewContainer,
  Header,
  BookContainer,
  BookDetails,
} from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import Image from 'next/image'
import { Heading } from '@/components/Heading'
import { LastReviews } from '../../index.page'
import dayjs from 'dayjs'
import { ButtonHTMLAttributes } from 'react'

interface CardReviewProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  review: LastReviews
}

export function CardReview({ review, ...props }: CardReviewProps) {
  const date = dayjs(new Date(review.created_at)).fromNow()
  const dateTime = dayjs(new Date(review.created_at)).format('DD MM YYYY')

  return (
    <CardReviewContainer
      variant="secondary"
      hover="active"
      as="button"
      {...props}
    >
      <Header>
        <AuthorDetails>
          <Avatar
            size="small"
            src={review.user.image}
            alt="Image profile Felipe"
          />

          <div>
            <Text>{review.user.name}</Text>
            <Text as="time" size="sm" dateTime={dateTime}>
              {date}
            </Text>
          </div>
        </AuthorDetails>

        <Rating value={review.rate} disabled />
      </Header>

      <BookContainer>
        <Image
          src={review.cover_url}
          alt="image book hobbit"
          height={152}
          width={108}
        />
        <BookDetails>
          <Heading size="md">{review.name}</Heading>
          <Text>{review.author}</Text>
          <Text>{review.summary}</Text>
        </BookDetails>
      </BookContainer>
    </CardReviewContainer>
  )
}
