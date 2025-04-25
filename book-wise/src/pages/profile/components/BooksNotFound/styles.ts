import { Card } from '@/components/Card'
import { Text } from '@/components/Text'
import { styled } from '@/styles/stitches.config'

export const CardBooksNotFound = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
  gap: 16,

  svg: {
    fontSize: 48,
    color: '$green100',
  },

  [`${Text}`]: {
    color: '$gray400',
  },
})
