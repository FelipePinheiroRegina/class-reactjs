import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  display: 'grid',
  height: '100vh',
  gridTemplateColumns: '232px 1fr',
  padding: '$5',
})

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  paddingTop: '3.25rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',

  '.flex-row': {
    display: 'flex',
    gap: '4rem',
  },

  [`> ${Heading}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    fontWeight: '$bold',

    svg: {
      fontSize: '2rem',
      color: '$green100',
    },
  },
})

export const Reviews = styled('div', {
  maxWidth: 624,
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  '> .gap': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    [`> ${Text}`]: {
      color: '$gray300',
    },
  },
})

export const ProfileDetails = styled('div', {
  width: 308,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',
  height: 'fit-content',
  borderLeft: '1px solid $colors$gray700',
})

export const UserDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',

  '> .user': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$1',

    [`${Text} + ${Text}`]: {
      color: '$gray400',
    },
  },
})

export const DividingLine = styled('div', {
  width: 32,
  height: 4,
  background: '$gradient-horizontal',
  borderRadius: '$full',
})

export const BooksDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const Detail = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',

  '> svg': {
    fontSize: '2rem',
    color: '$green100',
  },

  '> div': {
    [`${Text} + ${Text}`]: {
      color: '$gray300',
      marginTop: '$1',
    },
  },
})
