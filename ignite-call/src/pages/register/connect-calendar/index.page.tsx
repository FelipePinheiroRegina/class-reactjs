import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Header, RegisterContainer } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { ArrowRight, Check } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNextPage() {
    await router.push('/register/time-intervals')
  }

  return (
    <RegisterContainer>
      <Header>
        <Heading as="strong">Connect your calendar!</Heading>
        <Text>
          Connect your calendar to automatically check busy times and new events
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          as they're scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Connected <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            failed to connect to Google, please check if you have enabled access
            permissions to Google Calendar
          </AuthError>
        )}
        <Button onClick={handleNextPage} disabled={!isSignedIn}>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </RegisterContainer>
  )
}
