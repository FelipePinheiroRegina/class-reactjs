import { styled } from '@/styles/stitches.config'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

export const CommentContainer = styled(Card, {})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },

  marginBottom: 24,
})

export const Form = styled('form', {
  '> div:last-child': {
    marginTop: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,

    [`${Text}`]: {
      color: '$green100',
    },

    '.errors': {
      [`${Text}`]: {
        color: '$red500',
      },
    },
  },
})
