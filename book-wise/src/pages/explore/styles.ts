import { Heading } from '@/components/Heading'
import { styled } from '@/styles/stitches.config'

export const ExploreContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 1fr',
  padding: '$5',
})

export const Content = styled('div', {
  paddingTop: '4.5rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',
  boxSizing: 'border-box',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 40,

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

  '> .input-container': {
    width: 433,
  },
})

export const Categories = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: 48,
})

export const Books = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '$5',
})
