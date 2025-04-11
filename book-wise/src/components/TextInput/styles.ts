import { styled } from '@/styles/stitches.config'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray800',
  padding: '$3 $4',
  borderRadius: '$sm',
  border: '1px solid $gray500',
  display: 'flex',
  alignItems: 'center',

  svg: {
    color: '$gray500',
    fontSize: '$xl',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',
    svg: {
      color: '$green200',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: 'regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
