import { ReactNode } from 'react'
import { styled } from './styles'

export type ButtonProps = {
  size: 'small' | 'large'
  children: ReactNode
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$2 $4',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    background: '$ignite500',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
