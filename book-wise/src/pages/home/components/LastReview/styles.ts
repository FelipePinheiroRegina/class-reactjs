import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { styled } from '@/styles/stitches.config'

export const LastReviewContainer = styled(Card, {})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',

  [`> ${Text}`]: {
    color: '$gray300',
  },
})

export const AuthorDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  'div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    [`${Text}:last-child`]: {
      color: '$gray400',
    },
  },
})

export const BookContainer = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const BookDetails = styled('div', {
  [`> ${Heading} + ${Text}`]: {
    color: '$gray400',
    marginTop: '$1',
    marginBottom: '$5',
  },

  [`> ${Text} + ${Text}`]: {
    color: '$gray300',
  },
})
