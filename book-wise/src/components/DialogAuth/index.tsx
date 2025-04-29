import { CloseButton, Dialog, Portal } from '@chakra-ui/react'
import { ButtonText, DialogContent, DialogBody, ButtonAuth } from './styles'
import { Text } from '../Text'
import googleImage from '@/assets/google-icon.svg'
import githubImage from '@/assets/github-icon.svg'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export const DialogAuth = () => {
  async function handleLogGoogle() {
    await signIn('google')
  }
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <ButtonText>Review</ButtonText>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <DialogContent>
            <Dialog.Header>
              <Dialog.Title>
                <Text>Log in to leave your review</Text>
              </Dialog.Title>
            </Dialog.Header>
            <DialogBody>
              <ButtonAuth as="button" hover="active" onClick={handleLogGoogle}>
                <Image
                  src={googleImage}
                  height={32}
                  width={32}
                  alt="image logo google"
                />
                <Text as="strong">Google log in</Text>
              </ButtonAuth>
              <ButtonAuth as="button" hover="active">
                <Image
                  src={githubImage}
                  height={32}
                  width={32}
                  alt="image logo github"
                />
                <Text as="strong"> Github log in</Text>
              </ButtonAuth>
            </DialogBody>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </DialogContent>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
