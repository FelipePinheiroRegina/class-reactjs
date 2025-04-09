import {
  Heading,
  MultiStep,
  Text,
  Button,
  TextArea,
  Avatar,
} from '@ignite-ui/react'
import { FormaAnnotation, ProfileBox } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Header, RegisterContainer } from '../styles'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const updateProfileFormSchema = z.object({
  bio: z
    .string()
    .min(10)
    .max(100)
    .transform((bio) => bio.trim())
    .transform((bio) => bio.toLowerCase()),
})

type UpdateProfileFormSchema = z.infer<typeof updateProfileFormSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormSchema>({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: {
      bio: '',
    },
  })
  const router = useRouter()
  const session = useSession()
  async function handleUpdateProfile(data: UpdateProfileFormSchema) {
    const { bio } = data
    await api.put('/users/profile', { bio })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <>
      <NextSeo title="update your profile | ignite call" noindex />
      <RegisterContainer>
        <Header>
          <Heading as="strong">Set your availability</Heading>
          <Text>Finally, a brief description and a profile picture.</Text>

          <MultiStep size={4} currentStep={4} />
        </Header>
        <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text size="sm">Profile photo</Text>
            <Avatar
              src={session.data?.user.avatar_url}
              alt={session.data?.user.name}
            />
          </label>

          <label>
            <Text size="sm">Sobre você</Text>
            <TextArea {...register('bio')} />
            <FormaAnnotation size="sm">
              Tell us a little about yourself. This will be displayed on your
              personal page.
            </FormaAnnotation>
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar <ArrowRight />
          </Button>
        </ProfileBox>
      </RegisterContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  return {
    props: {
      session,
    },
  }
}
