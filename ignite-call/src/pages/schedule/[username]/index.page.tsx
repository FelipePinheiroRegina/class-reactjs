import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './styles'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prisma } from '@/lib/prisma'
import { ScheduleForm } from './ScheduleForm'
import { NextSeo } from 'next-seo'

interface SchedulesProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default function schedule({ user }: SchedulesProps) {
  return (
    <>
      <NextSeo title={`schedule with ${user.name} | ignite call`} />
      <Container>
        <UserHeader>
          <Avatar src={user.avatarUrl} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
