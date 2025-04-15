import Image from 'next/image'
import { NavContainer, LinksNavigate, Footer } from './styles'
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
  const user = true
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
          <Text>Home</Text>
        </Link>

        <Link href="/explore" data-checked={pathName === '/explore'}>
          <Binoculars />
          <Text>Explore</Text>
        </Link>

        {user && (
          <Link href="/profile" data-checked={pathName === '/profile'}>
            <User />
            <Text>Profile</Text>
          </Link>
        )}
      </LinksNavigate>

      <Footer>
        {user ? (
          <Link href="/auth">
            <Avatar
              src="https://github.com/FelipePinheiroRegina.png"
              size="small"
              alt="Felipe Pinheiro"
            />
            <Text>Felipe Pinheiro</Text>
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
