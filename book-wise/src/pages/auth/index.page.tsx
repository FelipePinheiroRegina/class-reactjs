import { NextSeo } from 'next-seo'
import {
  RegisterContainer,
  ImageContainer,
  AuthenticationModes,
  AuthCard,
} from './styles'
import bannerBookWise from '@/assets/banner-bookwise.png'
import googleIcon from '@/assets/google-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import rocketIcon from '@/assets/rocket-icon.svg'
import Image from 'next/image'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function Register() {
  const router = useRouter()
  async function handleNavigateGuest() {
    router.push('/home')
  }

  async function handleLogGoogle() {
    await signIn('google', { callbackUrl: '/home' })
  }

  return (
    <>
      <NextSeo title="Create account | BookWise" />
      <RegisterContainer>
        <ImageContainer>
          <Image
            src={bannerBookWise}
            height={912}
            width={600}
            alt="banner image of book wise"
          />
        </ImageContainer>

        <AuthenticationModes>
          <Heading>Welcome to BookWise!</Heading>
          <Text>log in or access as a guest</Text>
          <AuthCard as="button" hover="active" onClick={handleLogGoogle}>
            <Image
              src={googleIcon}
              height={32}
              width={32}
              alt="image logo google"
            />
            <Text as="strong">Log in with Google</Text>
          </AuthCard>
          <AuthCard as="button" hover="active">
            <Image
              src={githubIcon}
              height={32}
              width={32}
              alt="image logo github"
            />
            <Text as="strong">Log in with GitHub</Text>
          </AuthCard>
          <AuthCard as="button" hover="active" onClick={handleNavigateGuest}>
            <Image
              src={rocketIcon}
              height={32}
              width={32}
              alt="image logo guest"
            />
            <Text as="strong">Access as guest</Text>
          </AuthCard>
        </AuthenticationModes>
      </RegisterContainer>
    </>
  )
}
