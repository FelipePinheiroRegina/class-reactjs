import { ComponentProps, ElementType } from 'react'
import { VariantProps } from '@stitches/react'
import { styled } from '@/styles/stitches.config'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  color: '$gray100',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
  size?: VariantProps<typeof Heading>['size']
}

Heading.displayName = 'Heading'
