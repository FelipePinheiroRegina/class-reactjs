import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.logo': {
        display: 'flex',
        gap: '1rem',

        h1: {
            fontSize: '$2xl',
        },

        p: {
            fontSize: '$sm',
        }

    },

    button: {
        position: 'relative',
        background: '$gray800',
        border: 'none',
        borderRadius: 6,
        padding: '0.75rem',
        cursor: 'pointer',

        svg: {
            fontSize: '$2xl',
            color: '$gray100'
        },

        span: {
            display: 'block',
            height: 24,
            width: 24,
            borderRadius: 999,

            position: 'absolute',
            top: '-8px',
            right: '-10px',

            background: '$green500',

            opacity: 0,
        },
    },

    '&[data-exists-items="true"]': {
        button: {
            span: {
                opacity: 1
            }
        }
    },

    '&[data-page-success="true"]': {
        justifyContent: 'center',
    },
})  