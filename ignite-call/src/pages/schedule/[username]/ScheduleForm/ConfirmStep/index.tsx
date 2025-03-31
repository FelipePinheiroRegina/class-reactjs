import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaConfirmForm = z.object({
  name: z.string().min(3, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  observations: z.string().nullable(),
})

type SchemaConfirmForm = z.infer<typeof schemaConfirmForm>

export function ConfirmStep() {
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

  function handleConfirmSchedule(data: SchemaConfirmForm) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmSchedule)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          march 22, 2025
        </Text>
        <Text>
          <Clock />
          18:00h
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
        <Button variant="tertiary">Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirm
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
