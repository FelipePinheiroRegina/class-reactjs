import { CardReviewContainer, BookContainer, BookDetails } from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import Image from 'next/image'
import { Heading } from '@/components/Heading'

interface CardReviewProps {
  cover_url: string
  name: string
  author: string
  summary: string
  averageRate: number
}

export function CardReview({
  cover_url,
  author,
  name,
  summary,
  averageRate,
}: CardReviewProps) {
  return (
    <CardReviewContainer variant="secondary">
      <BookContainer>
        <Image src={cover_url} alt={`${name} image`} height={134} width={98} />
        <BookDetails>
          <div className="author">
            <Heading size="md">{name}</Heading>
            <Text>{author}</Text>
          </div>

          <Rating value={averageRate} disabled />
        </BookDetails>
      </BookContainer>

      <Text>{summary}</Text>
    </CardReviewContainer>
  )
}
