import { styled } from '@/styles/stitches.config'
import { Link } from '../Link'

export const NavContainer = styled('nav', {
  display: 'grid',
  gridTemplateRows: 'max-content 1fr max-content',
  height: 'calc(100vh - 200px)',
  width: 232,
  justifyContent: 'center',
  background:
    'linear-gradient(to bottom, #0A0F1A, #141C2B 30%, #191A2D 60%, #121018)',
  borderRadius: '$md',
  paddingTop: '$10',
  paddingBottom: '$6',
})

export const LinksNavigate = styled('div', {
  marginTop: 64,

  [`${Link}`]: {
    color: '$gray400',
    fontWeight: '$regular',

    '&[data-checked="true"]': {
      color: '$gray100',
      fontWeight: 'bold',

      '&::before': {
        content: '.',
        color: 'transparent',
        background: '$gradient-vertical',
        borderRadius: '$full',
      },
    },
  },

  [`${Link} + ${Link}`]: {
    marginTop: 16,
  },
})
