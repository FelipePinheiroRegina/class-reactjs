import { styled } from '@/styles/stitches.config'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '4.5rem',
  height: '4.5rem',
  overflow: 'hidden',
  padding: '$1',

  background: '$gradient-vertical',

  variants: {
    size: {
      small: {
        height: '2rem',
        width: '2rem',
      },

      large: {
        width: '4.5rem',
        height: '4.5rem',
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  borderRadius: 'inherit',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray200',

  svg: {
    fontSize: '$2xl',
  },
})
