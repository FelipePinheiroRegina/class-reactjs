import { styled } from '@/styles/stitches.config'

export const TextAreaContainer = styled('div', {
  position: 'relative',
})

export const TextAreaStyled = styled('textarea', {
  backgroundColor: '$gray800',
  padding: '.875rem $5',
  borderRadius: '$sm',
  border: '1px solid $gray500',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  resize: 'vertical',
  minHeight: 80,

  width: '100%',

  '&:focus': {
    outline: 0,
    borderColor: '$green200',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export const TextAreaLetterCounter = styled('div', {
  position: 'absolute',
  bottom: 15,
  right: 10,
  fontFamily: '$default',
  fontSize: '$xs',
  color: '$gray350',
})
