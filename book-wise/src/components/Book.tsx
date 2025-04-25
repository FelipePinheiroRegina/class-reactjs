import { styled } from '@/styles/stitches.config'
import { Card } from './Card'
import { Heading } from './Heading'
import { Text } from './Text'
import Image from 'next/image'
import { Rating } from './Rating'
import { ButtonHTMLAttributes } from 'react'

const BookContainer = styled(Card, {
  display: 'flex',
  gap: '$5',
  minWidth: 318,
})

const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [`${Heading}`]: {
    fontWeight: '$bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '10rem',
    marginBottom: '$1',
  },

  [`${Text}`]: {
    textAlign: 'left',
    color: '$gray400',
  },
})

interface BookProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imageSize?: 'small' | 'large'
  book: ShortBook
}

export function Book({ imageSize = 'small', book, ...props }: BookProps) {
  const typeImage = imageSize === 'small'

  return (
    <BookContainer as="button" variant="secondary" hover="active" {...props}>
      <Image
        src={book.cover_url}
        alt="image george book"
        height={typeImage ? 94 : 152}
        width={typeImage ? 64 : 108}
      />

      <BookDetails>
        <div>
          <Heading>{book.name}</Heading>
          <Text>{book.author}</Text>
        </div>

        <Rating value={book.rate} disabled />
      </BookDetails>
    </BookContainer>
  )
}
