import { Card } from '@/components/Card'
import { Text } from '@/components/Text'
import { styled } from '@/styles/stitches.config'

export const BookDetailsContainer = styled(Card, {})

export const ImageTitleRatingContainer = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: 32,
  marginBottom: 40,
})

export const TitleRatingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,

  '.gap-8': {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
})

export const TitleContainer = styled('div', {
  [`${Text}`]: {
    color: '$gray300',
  },
})

export const RatingContainer = styled('div', {
  [`${Text}`]: {
    color: '$gray400',
  },
})

export const CategoriesPagesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  padding: '24px 0',
  justifyContent: 'space-between',
  borderTop: '1px solid $gray600',
})

const BaseStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  svg: {
    fontSize: '$2xl',
    color: '$green100',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,

    [`${Text}:first-child`]: {
      color: '$gray300',
    },
  },
})

export const CategoryContainer = styled(BaseStyled, {})

export const PagesContainer = styled(BaseStyled, {})
