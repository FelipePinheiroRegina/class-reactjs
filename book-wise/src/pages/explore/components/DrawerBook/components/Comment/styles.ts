import { styled } from '@/styles/stitches.config'
import { Card } from '@/components/Card'

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

  marginBottom: 40,
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  '> div:last-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
})
