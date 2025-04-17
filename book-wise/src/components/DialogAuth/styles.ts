import { styled } from '@/styles/stitches.config'
import { Dialog } from '@chakra-ui/react'
import { Card } from '../Card'

export const DialogContent = styled(Dialog.Content, {
  background: '$gray700',
  padding: '56px 72px',

  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  borderRadius: 12,
})

export const DialogBody = styled(Dialog.Body, {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const ButtonText = styled('button', {
  unset: 'all',
  color: '$purple100',
  fontWeight: '$bold',
  fontSize: '$md',
  cursor: 'pointer',
  borderBottom: '2px solid transparent',

  '&:hover': {
    borderBottom: '2px solid $colors$purple100',
  },
})

export const ButtonAuth = styled(Card, {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
})
