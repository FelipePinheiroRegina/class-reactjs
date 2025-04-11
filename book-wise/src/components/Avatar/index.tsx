import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { User } from '@phosphor-icons/react'

interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'small' | 'large'
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer size={props.size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
