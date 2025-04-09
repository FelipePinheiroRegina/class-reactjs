import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY_AVAILABILITY } from '../CalendarStep'

const schemaConfirmForm = z.object({
  name: z.string().min(3, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  observations: z.string().nullable(),
})

type SchemaConfirmForm = z.infer<typeof schemaConfirmForm>

interface ConfirmStepProps {
  schedulingDate: Date
  onCancelConfirmation: VoidFunction
}

export function ConfirmStep({
  schedulingDate,
  onCancelConfirmation,
}: ConfirmStepProps) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<SchemaConfirmForm>({
    resolver: zodResolver(schemaConfirmForm),
    defaultValues: {
      name: '',
      email: '',
      observations: '',
    },
  })

  const router = useRouter()
  const username = String(router.query.username)
  const queryClient = useQueryClient()

  async function handleConfirmSchedule(data: SchemaConfirmForm) {
    const { name, email, observations } = data
    await api.post(`/users/${username}/schedule`, {
      name,
      email,
      observations,
      date: schedulingDate,
    })

    const formatDateToKey = dayjs(schedulingDate).format('YYYY-MM-DD')
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY_AVAILABILITY, formatDateToKey],
    })
    onCancelConfirmation()
  }

  const describedDate = dayjs(schedulingDate).format('MMMM DD, YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmSchedule)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describedDate}
        </Text>
        <Text>
          <Clock />
          {describedTime}
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Full name</Text>
        <TextInput
          placeholder="your name"
          crossOrigin
          onPointerEnterCapture
          onPointerLeaveCapture
          {...register('name')}
        />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Email address</Text>
        <TextInput
          placeholder="johndoe@example.com"
          crossOrigin
          onPointerEnterCapture
          onPointerLeaveCapture
          type="email"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observations</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button variant="tertiary" onClick={onCancelConfirmation}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirm
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
