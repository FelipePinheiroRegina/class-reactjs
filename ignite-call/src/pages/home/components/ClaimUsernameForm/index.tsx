import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The username must have at least 3 letters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'The user can only have letters and hyphens',
    })
    .transform((username) => username.toLocaleLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })
  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          crossOrigin
          onPointerEnterCapture
          onPointerLeaveCapture
          size="sm"
          prefix="ignite.com/"
          placeholder="your username"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reserve
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text>
          {errors.username ? errors.username.message : 'Enter your username'}
        </Text>
      </FormAnnotation>
    </>
  )
}
