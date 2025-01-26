import { styled } from '..'

export const DefaultButtonContainer  = styled('button', {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    width: '100%',

    '&:disabled': {
        opacity: 0.7,
        cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
        backgroundColor: '$green300'
    }
})