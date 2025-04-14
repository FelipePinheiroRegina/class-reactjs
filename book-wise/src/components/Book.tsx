import { styled } from '@/styles/stitches.config'
import { Card } from './Card'
import { Heading } from './Heading'
import { Text } from './Text'
import imageGeorgeBook from '@/assets/books/Book.png'
import Image from 'next/image'
import { Rating } from './Rating'

const BookContainer = styled(Card, {
  display: 'flex',
  gap: '$5',
})

const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [`${Heading}`]: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '10rem',
    marginBottom: '$1',
  },

  [`${Text}`]: {
    color: '$gray400',
  },
})

interface BookProps {
  imageSize?: 'small' | 'large'
}

export function Book({ imageSize = 'small' }: BookProps) {
  const typeImage = imageSize === 'small'

  return (
    <BookContainer variant="secondary">
      <Image
        src={imageGeorgeBook}
        alt="image george book"
        height={typeImage ? 94 : 152}
      />

      <BookDetails>
        <div>
          <Heading>
            Animal Farm Sei Seila o que sei que la tranto faz tanto fez nao sei
            que tem
          </Heading>
          <Text>George Orwell</Text>
        </div>

        <Rating value={4} disabled />
      </BookDetails>
    </BookContainer>
  )
}
