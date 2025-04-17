import { styled } from '@/styles/stitches.config'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

export const ReviewContainer = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  [`> ${Text}`]: {
    color: '$gray300',
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  '> div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: 16,

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,

      [`${Text} + ${Text}`]: {
        color: '$gray300',
      },
    },
  },
})
