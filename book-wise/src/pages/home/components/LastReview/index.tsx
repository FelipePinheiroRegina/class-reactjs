import {
  LastReviewContainer,
  Header,
  BookContainer,
  BookDetails,
} from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import Image from 'next/image'
import { Heading } from '@/components/Heading'
import { LastReviewUserLogged } from '../../index.page'
import dayjs from 'dayjs'

interface LastReviewProps {
  props: LastReviewUserLogged
}

export function LastReview({ props }: LastReviewProps) {
  const date = dayjs(new Date(props.created_at)).fromNow()

  return (
    <LastReviewContainer variant="primary">
      <BookContainer>
        <Image
          src={props.cover_url}
          alt="image book hobbit"
          height={152}
          width={108}
        />
        <BookDetails>
          <Header>
            <Text as="time" size="sm">
              {date}
            </Text>
            <Rating value={props.rate} disabled />
          </Header>

          <Heading size="md">{props.name}</Heading>
          <Text>{props.author}</Text>
          <Text>{props.summary}</Text>
        </BookDetails>
      </BookContainer>
    </LastReviewContainer>
  )
}
