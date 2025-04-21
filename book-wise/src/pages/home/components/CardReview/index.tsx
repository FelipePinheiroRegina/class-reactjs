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

interface CardReviewProps {
  props: LastReviews
}

export function CardReview({ props }: CardReviewProps) {
  const date = dayjs(new Date(props.created_at)).fromNow()
  const dateTime = dayjs(new Date(props.created_at)).format('DD MM YYYY')

  return (
    <CardReviewContainer variant="secondary" hover="active" as="button">
      <Header>
        <AuthorDetails>
          <Avatar
            size="small"
            src={props.user.image}
            alt="Image profile Felipe"
          />

          <div>
            <Text>{props.user.name}</Text>
            <Text as="time" size="sm" dateTime={dateTime}>
              {date}
            </Text>
          </div>
        </AuthorDetails>

        <Rating value={props.rate} disabled />
      </Header>

      <BookContainer>
        <Image
          src={props.cover_url}
          alt="image book hobbit"
          height={152}
          width={108}
        />
        <BookDetails>
          <Heading size="md">{props.name}</Heading>
          <Text>{props.author}</Text>
          <Text>{props.summary}</Text>
        </BookDetails>
      </BookContainer>
    </CardReviewContainer>
  )
}
