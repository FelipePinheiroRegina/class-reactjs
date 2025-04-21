import Image from 'next/image'
import { NavContainer, LinksNavigate, Footer } from './styles'
import logoBookwise from '@/assets/logo-bookwise.png'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User as UserIcon,
} from '@phosphor-icons/react'
import { Link } from '../Link'
import { usePathname } from 'next/navigation'
import { Avatar } from '../Avatar'
import { Text } from '../Text'
import { User } from 'next-auth'

interface NavProps {
  user: User | null
}

export function Nav({ user }: NavProps) {
  const pathName = usePathname()

  return (
    <NavContainer>
      <Image
        src={logoBookwise}
        height={32}
        width={128}
        alt="image logo bookwise"
      />

      <LinksNavigate>
        <Link href="/home" data-checked={pathName === '/home'}>
          <ChartLineUp />
          <Text>Home</Text>
        </Link>

        <Link href="/explore" data-checked={pathName === '/explore'}>
          <Binoculars />
          <Text>Explore</Text>
        </Link>

        {user && (
          <Link href="/profile" data-checked={pathName === '/profile'}>
            <UserIcon />
            <Text>Profile</Text>
          </Link>
        )}
      </LinksNavigate>

      <Footer>
        {user ? (
          <Link href="/auth">
            <Avatar src={user.image} size="small" alt="Felipe Pinheiro" />
            <Text>{user.name}</Text>
            <SignOut color="#F75A68" />
          </Link>
        ) : (
          <Link href="/auth">
            <Text>log in</Text>
            <SignIn color="#50B2C0" />
          </Link>
        )}
      </Footer>
    </NavContainer>
  )
}
