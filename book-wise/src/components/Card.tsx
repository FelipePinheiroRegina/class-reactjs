import { styled } from '@/styles/stitches.config'
import { ComponentProps, ElementType } from 'react'

export const Card = styled('div', {
  padding: '$6 $5',
  borderRadius: '$smd',
  border: '2px solid transparent',

  variants: {
    variant: {
      primary: {
        background: '$gray600',
      },

      secondary: {
        background: '$gray700',
      },
    },

    hover: {
      active: {
        '&:hover': {
          border: '2px solid $colors$gray500',
          cursor: 'pointer',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface CardProps extends ComponentProps<typeof Card> {
  as?: ElementType
}

Card.displayName = 'Card'
