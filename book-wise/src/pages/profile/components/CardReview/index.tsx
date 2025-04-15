import { CardReviewContainer, BookContainer, BookDetails } from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import Image from 'next/image'
import { Heading } from '@/components/Heading'
import imageBookHobbit from '@/assets/books/o-hobbit.png'

export function CardReview() {
  return (
    <CardReviewContainer variant="secondary">
      <BookContainer>
        <Image
          src={imageBookHobbit}
          alt="image book hobbit"
          height={134}
          width={98}
        />
        <BookDetails>
          <div className="author">
            <Heading size="md">The Hobbit</Heading>
            <Text>J.R.R Tolkien</Text>
          </div>

          <Rating value={4} disabled />
        </BookDetails>
      </BookContainer>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt
        corporis repellat sint accusamus velit eum temporibus dolores obcaecati,
        molestiae error dicta vel enim quae, quibusdam eligendi omnis magni a.
      </Text>
    </CardReviewContainer>
  )
}
