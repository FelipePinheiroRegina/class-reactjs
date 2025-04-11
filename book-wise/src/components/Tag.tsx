import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles/stitches.config'

export const Tag = styled('button', {
  all: 'unset',
  borderRadius: '$full',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  width: 'fit-content',
  boxSizing: 'border-box',
  padding: '$1 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  color: '$purple100',
  backgroundColor: 'transparent',
  border: '2px solid $colors$purple100',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&[data-checked="true"]': {
    color: '$gray100',
    backgroundColor: '$purple200',
    border: '2px solid transparent',

    '&:hover': {
      border: '2px solid $colors$purple100',
    },
  },
})

export interface TagProps extends ComponentProps<typeof Tag> {
  as?: ElementType
}

Tag.displayName = 'Tag'
