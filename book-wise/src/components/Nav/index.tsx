import Image from 'next/image'
import { NavContainer, LinksNavigate } from './styles'
import logoBookwise from '@/assets/logo-bookwise.png'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { Link } from '../Link'
import { usePathname } from 'next/navigation'
import { Avatar } from '../Avatar'
import { Text } from '../Text'

export function Nav() {
  const pathName = usePathname()
  const user = {
    name: 'Felipe',
    avatar: 'https://github.com/FelipePinheiroRegina.png',
  }
  return (
    <NavContainer>
      <Image
        src={logoBookwise}
        height={32}
        width={128}
        alt="image logo bookwise"
      />

      <LinksNavigate>
        <Link href="/" data-checked={pathName === '/'}>
          <ChartLineUp />
          Home
        </Link>

        <Link href="/explore" data-checked={pathName === '/explore'}>
          <Binoculars />
          Explore
        </Link>

        <Link href="/profile" data-checked={pathName === '/profile'}>
          <User />
          Profile
        </Link>
      </LinksNavigate>

      {!!user?.name ? (
        <Link href="/auth">
          <Avatar src={user.avatar} size="small" alt={user.name} />
          <Text>{user.name}</Text>
          <SignOut color="#F75A68" />
        </Link>
      ) : (
        <Link href="/auth">
          <Text>log in</Text>
          <SignIn color="#50B2C0" />
        </Link>
      )}
    </NavContainer>
  )
}
