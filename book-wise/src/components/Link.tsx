import { styled } from '@/styles/stitches.config'
import LinkNext from 'next/link'

export const Link = styled(LinkNext, {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0 $2',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  width: 'fit-content',

  svg: {
    fontSize: '$lg',
  },

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 1px $colors$gray200',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray200',
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray700',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },

      secondary: {
        color: '$purple100',
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray700',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
        height: 30,
      },
      md: {
        fontSize: '$md',
        height: 34,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

Link.displayName = 'Link'
