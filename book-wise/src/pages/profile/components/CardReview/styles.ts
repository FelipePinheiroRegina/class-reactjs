import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { styled } from '@/styles/stitches.config'

export const CardReviewContainer = styled(Card, {})

export const BookContainer = styled('div', {
  display: 'flex',
  gap: '$5',
  marginBottom: '$6',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [`.author > ${Heading} + ${Text}`]: {
    color: '$gray400',
    marginBottom: '$5',
  },
})
