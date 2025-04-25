import {
  ButtonGroup,
  IconButton,
  Pagination as PaginationChakra,
} from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface PaginationProps {
  count: number
  page: number
  onPageChange: VoidFunction
}

export const Pagination = ({ page, count, onPageChange }: PaginationProps) => {
  return (
    <PaginationChakra.Root
      count={count}
      page={page}
      onPageChange={onPageChange}
    >
      <ButtonGroup variant="ghost" size="sm">
        <PaginationChakra.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </PaginationChakra.PrevTrigger>

        <PaginationChakra.Items
          render={(page) => (
            <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
              {page.value}
            </IconButton>
          )}
        />

        <PaginationChakra.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </PaginationChakra.NextTrigger>
      </ButtonGroup>
    </PaginationChakra.Root>
  )
}
