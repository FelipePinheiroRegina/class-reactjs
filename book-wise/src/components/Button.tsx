import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  fontSize: '$2xl',
  padding: '$2',
  minHeight: 40,
  minWidth: 40,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 1px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray200',
        backgroundColor: '$gray600',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray500',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
