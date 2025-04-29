import { Avatar } from '@/components/Avatar'
import { CommentContainer, Header, Form } from './styles'
import { TextArea } from '@/components/TextArea'
import { Rating } from '@/components/Rating'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Check, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createReview } from '@/api/create-review'
import { useState } from 'react'

const schemaComment = z.object({
  description: z
    .string()
    .min(10, { message: 'min 10 characters on description' }),
  rate: z.coerce.number().gte(1, { message: 'min 1 star on rate' }),
})

type SchemaComment = z.infer<typeof schemaComment>

interface CommentProps {
  bookId: string
}

export function Comment({ bookId }: CommentProps) {
  const { data } = useSession()
  const [createdSuccess, setCreatedSuccess] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const { control, handleSubmit, reset, formState } = useForm<SchemaComment>({
    resolver: zodResolver(schemaComment),
    defaultValues: {
      description: '',
      rate: 0,
    },
  })

  const { mutateAsync: createReviewFn } = useMutation({
    mutationFn: createReview,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get-book-by-id', bookId],
      })
    },
  })

  async function handleAddComment(data: SchemaComment) {
    const { description, rate } = data
    await createReviewFn({ bookId, description, rate })
    setCreatedSuccess('Created successfully!')
    reset()
    setTimeout(() => {
      setCreatedSuccess(null)
    }, 2000)
  }

  function handleReset() {
    reset()
  }

  return (
    <CommentContainer variant="secondary">
      <Form onSubmit={handleSubmit(handleAddComment)}>
        <Header>
          <div>
            <Avatar size="small" src={data?.user.image} alt={data?.user.name} />
            <Text as="strong">{data?.user.name ?? 'Loading...'}</Text>
          </div>

          <Controller
            control={control}
            name="rate"
            render={({ field }) => (
              <Rating
                size="lg"
                value={field.value}
                onChange={(value) => field.onChange(value)}
              />
            )}
          />
        </Header>

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextArea
              placeholder="Write your review"
              maxLength={450}
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />

        <div>
          <Text size="sm">{createdSuccess}</Text>
          <div className="errors">
            <Text size="sm">
              {formState.errors?.description?.message &&
                formState.errors.description.message}
            </Text>
            <Text size="sm">
              {formState.errors?.rate?.message && formState.errors.rate.message}
            </Text>
          </div>

          <Button onClick={handleReset}>
            <X color="#8381D9" />
          </Button>
          <Button type="submit">
            <Check color="#50B2C0" />
          </Button>
        </div>
      </Form>
    </CommentContainer>
  )
}
