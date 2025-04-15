import { ComponentProps, ElementType } from 'react'
import { VariantProps } from '@stitches/react'
import { styled } from '@/styles/stitches.config'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '100%',
  color: '$gray200',

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
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
  size?: VariantProps<typeof Text>['size']
}

Text.displayName = 'Text'
