import {
    DrawerContent,
    DrawerCloseTrigger,
    DrawerHeader,
    DrawerTitle,

    DrawerBody,
    DrawerFooter,
} from "@/components/ui/drawer"

import { styled } from ".."

export const DrawerContentStyled = styled(DrawerContent, {
  background: '$gray800',
  padding: '72px 48px 48px',
})

export const DrawerCloseTriggerStyled = styled(DrawerCloseTrigger, {
  
})

export const DrawerHeaderStyled = styled(DrawerHeader, {
  
})

export const DrawerTitleStyled = styled(DrawerTitle, {
  color: '$gray100',
  fontSize: '$lg'
})

export const  DrawerBodyStyled = styled(DrawerBody, {
  marginTop: 32,
  marginBottom: 32,
})

export const Shirt = styled('div', {
  display: 'grid',
  gridTemplateColumns: '95px auto',
  alignItems: 'center',
  gap: 20,
  marginBottom: 24,
  

  '.image-container': {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  '.details-shirt': {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,

    h3: {
      fontWeight: 400,
      fontSize: '$md',
      marginBottom: 2,
    },

    strong: {
      fontSize: '$md'
    },

    button: {
      color: '$green500',
      fontWeight: 800,
      fontSize: '$df',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    }
  },
})

export const  DrawerFooterStyled = styled(DrawerFooter, {
  display: 'flex',
  flexDirection: 'column',

  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  '.amount': {
    'span:first-child': {
      fontSize: '$df',
      color: '$gray100',
    },

    'span:last-child': {
      fontSize: '$md',
      color: '$gray100',
    },
  },

  '.total': {
    marginBottom: 57,

    'strong:first-child': {
      fontSize: '$md',
      color: '$gray100',
    },

    'strong:last-child': {
      fontSize: '$xl',
      color: '$gray100',
    },
  }
})