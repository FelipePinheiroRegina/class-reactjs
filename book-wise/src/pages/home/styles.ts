import { Heading } from '@/components/Heading'
import { styled } from '@/styles/stitches.config'
import { Card } from '@/components/Card'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 1fr',
  padding: '$5',
})

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',

  paddingTop: '4.5rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',

  [`> ${Heading}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontWeight: '$bold',

    svg: {
      fontSize: 32,
      color: '$green100',
    },
  },

  '> .two-columns': {
    display: 'flex',
    gap: 64,
  },

  '.space-between': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    marginBottom: 16,
  },
})

export const Reviews = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

export const LatestReviews = styled('div', {
  [`> ${Card} + ${Card}`]: {
    marginTop: 12,
  },
})

export const PopularBooks = styled('aside', {})
