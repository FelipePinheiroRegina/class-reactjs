import { Drawer } from '@chakra-ui/react'
import { styled } from '@/styles/stitches.config'

export const DrawerContent = styled(Drawer.Content, {
  background: '$gray800',
})

export const DrawerBodyStyled = styled(Drawer.Body, {
  marginTop: 64,
  padding: '0 3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,

    '> .auth': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    '> .reviews': {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
  },
})
