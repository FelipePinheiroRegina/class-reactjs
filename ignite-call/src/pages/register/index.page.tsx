import { Heading, MultiStep, Text, TextInput, Button } from '@ignite-ui/react'
import { Form, FormError, Header, RegisterContainer } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { NextSeo } from 'next-seo'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The username must have at least 3 letters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'The user can only have letters and hyphens',
    })
    .transform((username) => username.toLocaleLowerCase()),
  name: z.string().min(3, { message: 'The name must have at least 3 letters' }),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()
  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormSchema) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        return alert(err?.response?.data?.message)
      }

      console.error(err)
    }
  }

  return (
    <>
      <NextSeo title="Create account | ignite call" />
      <RegisterContainer>
        <Header>
          <Heading as="strong">Welcome to the Ignite Call</Heading>
          <Text>
            We need some information to create your profile! Oh, and you can
            edit this information later.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>
        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Username</Text>
            <TextInput
              prefix="ignite.com/"
              placeholder="your username"
              crossOrigin
              onPointerEnterCapture
              onPointerLeaveCapture
              {...register('username')}
            />
            {errors.username && (
              <FormError size="sm">{errors.username.message}</FormError>
            )}
          </label>

          <label>
            <Text size="sm">Full name</Text>
            <TextInput
              placeholder="your full name"
              crossOrigin
              onPointerEnterCapture
              onPointerLeaveCapture
              {...register('name')}
            />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Next step <ArrowRight />
          </Button>
        </Form>
      </RegisterContainer>
    </>
  )
}
