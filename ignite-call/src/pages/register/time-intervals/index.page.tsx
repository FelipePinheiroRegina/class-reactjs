import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Header, RegisterContainer } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  FormError,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '@/aux-functions/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { convertTimeStringToMinutes } from '@/aux-functions/convert-time-string-to-minutes'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
        startTimeInMinutes: z.number().nullish(),
        endTimeInMinutes: z.number().nullish(),
      }),
    )
    .length(7)
    .transform((intervals) =>
      intervals.filter((interval) => interval.enabled === true),
    )
    .refine((intervals) => intervals.length > 0, {
      message: 'You must select at least one day of the week',
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          ...interval,
          startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'The end time must be at least one hour later than the start time.',
      },
    ),
})

type TypeIntervalsFormSchema = z.infer<typeof timeIntervalsFormSchema>

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<TypeIntervalsFormSchema>({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays({ short: false })

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')
  const router = useRouter()
  async function handleSetTimeIntervals(data: TypeIntervalsFormSchema) {
    const { intervals } = data
    await api.post('/users/time-intervals', { intervals })

    await router.push('/register/update-profile')
  }

  return (
    <RegisterContainer>
      <Header>
        <Heading as="strong">Almost there!</Heading>
        <Text>Set the time range you are available each day of the week.</Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field, index) => (
            <IntervalItem key={field.id}>
              <IntervalDay>
                <Controller
                  name={`intervals.${index}.enabled`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onCheckedChange={(checked) => {
                        field.onChange(checked === true)
                      }}
                      checked={field.value}
                    />
                  )}
                />
                <Text>{weekDays[field.weekDay]}</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  crossOrigin
                  onPointerEnterCapture
                  onPointerLeaveCapture
                  disabled={intervals[index].enabled === false}
                  {...register(`intervals.${index}.startTime`)}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  disabled={intervals[index].enabled === false}
                  crossOrigin
                  onPointerEnterCapture
                  onPointerLeaveCapture
                  {...register(`intervals.${index}.endTime`)}
                />
              </IntervalInputs>
            </IntervalItem>
          ))}
        </IntervalContainer>

        {errors.intervals?.root && (
          <FormError>{errors.intervals.root.message}</FormError>
        )}

        <Button type="submit" disabled={isSubmitting}>
          Next step
          <ArrowRight />
        </Button>
      </IntervalBox>
    </RegisterContainer>
  )
}
