import { Card } from '@/components/Card'
import { Text } from '@/components/Text'
import { styled } from '@/styles/stitches.config'

export const RegisterContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
})

export const ImageContainer = styled('div', {
  padding: '$5',
})

export const AuthenticationModes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [`${Text} + ${Card}`]: {
    marginTop: 40,
  },

  [`${Card} + ${Card}`]: {
    marginTop: 16,
  },
})

export const AuthCard = styled(Card, {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '$5',
  width: 372,

  [`${Text}`]: {
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
