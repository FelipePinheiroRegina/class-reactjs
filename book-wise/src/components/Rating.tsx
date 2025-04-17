import { useState, Dispatch, SetStateAction } from 'react'
import { Star } from '@phosphor-icons/react'
import { styled } from '@/styles/stitches.config'

const RatingContainer = styled('div', {
  display: 'flex',
  gap: 4,

  svg: {
    color: '$purple100',
  },

  variants: {
    sizes: {
      sm: {
        svg: {
          fontSize: '$md',
        },
      },

      md: {
        svg: {
          fontSize: '$xl',
        },
      },

      lg: {
        svg: {
          fontSize: '$3xl',
        },
      },
    },
  },

  defaultVariants: {
    sizes: 'sm',
  },
})

interface RatingProps {
  max?: number
  value: number
  onChange?: Dispatch<SetStateAction<number>>
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Rating({
  max = 5,
  value,
  onChange,
  disabled,
  size = 'sm',
}: RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const currentRating = hovered ?? value

  return (
    <RatingContainer sizes={size}>
      {Array.from({ length: max }).map((_, index) => {
        const filled = index < currentRating

        if (disabled) {
          return (
            <Star
              key={index}
              weight={filled ? 'fill' : 'regular'}
              cursor="default"
            />
          )
        }

        return (
          <Star
            key={index}
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
