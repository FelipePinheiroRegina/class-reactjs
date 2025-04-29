import { Avatar } from '@/components/Avatar'
import { ReviewContainer, Header } from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import { Rating as IRating } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { getUserProfileData } from '@/api/get-user-profile-data'
import dayjs from 'dayjs'

interface ReviewProps {
  props: IRating
}

export function Review({ props }: ReviewProps) {
  const { data: userProfileData, isLoading: isLoadingProfileData } = useQuery({
    queryKey: ['get-user-profile-data', props.user_id],
    queryFn: async () => await getUserProfileData({ id: props.user_id }),
    enabled: !!props.user_id,
  })

  const createdAt = dayjs(new Date(props.created_at)).fromNow()

  return (
    <ReviewContainer variant="secondary">
      <Header>
        <div>
          <Avatar
            size="small"
            src={userProfileData?.image ?? undefined}
            alt={userProfileData?.name ?? undefined}
          />
          <div>
            <Text as="strong">
              {isLoadingProfileData ? 'Loading...' : userProfileData?.name}
            </Text>
            <Text as="time" size="sm">
              {createdAt}
            </Text>
          </div>
        </div>
        <Rating value={props.rate} disabled />
      </Header>
      <Text size="sm">{props.description}</Text>
    </ReviewContainer>
  )
}
