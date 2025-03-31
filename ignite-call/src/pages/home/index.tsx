import { Heading, Text } from '@ignite-ui/react'
import { HomeContainer, Hero, Preview } from './styles'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import Image from 'next/image'
import scheduleImage from '@/assets/schedule.png'

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Heading size="4xl">Hassle-free scheduling</Heading>
        <Text size="xl">
          Connect your calendar and let people book appointments on their own
          time.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={scheduleImage}
          height={400}
          quality={100}
          priority
          alt="calendar symbolizing the application in operation"
        />
      </Preview>
    </HomeContainer>
  )
}
