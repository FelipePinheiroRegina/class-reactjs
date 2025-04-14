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
import imageBookHobbit from '@/assets/books/o-hobbit.png'

interface CardReviewProps {
  user?: boolean
}

export function CardReview({ user = false }: CardReviewProps) {
  return (
    <CardReviewContainer variant={user ? 'primary' : 'secondary'}>
      {!user && (
        <Header data-mb="true">
          <AuthorDetails>
            <Avatar
              size="small"
              src="https://github.com/FelipePinheiroRegina.png"
              alt="Image profile Felipe"
            />

            <div>
              <Text>Felipe Pinheiro</Text>
              <Text as="time" size="sm">
                Today
              </Text>
            </div>
          </AuthorDetails>

          <Rating value={4} disabled />
        </Header>
      )}

      <BookContainer>
        <Image
          src={imageBookHobbit}
          alt="image book hobbit"
          height={152}
          width={108}
        />
        <BookDetails>
          {user && (
            <Header>
              <Text as="time" size="sm">
                Two days ago
              </Text>
              <Rating value={4} disabled />
            </Header>
          )}
          <Heading size="md">The Hobbit</Heading>
          <Text>J.R.R Tolkien</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            incidunt corporis repellat sint accusamus velit eum temporibus
            dolores obcaecati, molestiae error dicta vel enim quae, quibusdam
            eligendi omnis magni a.
          </Text>
        </BookDetails>
      </BookContainer>
    </CardReviewContainer>
  )
}
