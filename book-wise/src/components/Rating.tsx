import { useState, Dispatch, SetStateAction } from 'react'
import { Star } from '@phosphor-icons/react'
import { styled } from '@/styles/stitches.config'

const RatingContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',

  svg: {
    color: '$purple100',
  },
})

interface RatingProps {
  max?: number
  value: number
  onChange?: Dispatch<SetStateAction<number>>
  disabled?: boolean
}

export function Rating({ max = 5, value, onChange, disabled }: RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const currentRating = hovered ?? value

  return (
    <RatingContainer>
      {Array.from({ length: max }).map((_, index) => {
        const filled = index < currentRating

        if (disabled) {
          return (
            <Star
              key={index}
              size={16}
              weight={filled ? 'fill' : 'regular'}
              cursor="default"
            />
          )
        }

        return (
          <Star
            key={index}
            size={20}
            cursor="pointer"
            weight={filled ? 'fill' : 'regular'}
            onMouseEnter={() => setHovered(index + 1)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange?.(index + 1)}
          />
        )
      })}
    </RatingContainer>
  )
}
