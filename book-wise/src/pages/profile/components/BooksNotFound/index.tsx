import { Books } from '@phosphor-icons/react'
import { CardBooksNotFound } from './styles'
import { Text } from '@/components/Text'

export function BooksNotFound() {
  return (
    <CardBooksNotFound variant="secondary">
      <Books />
      <Text size="2xl">
        No books found with that word, search by book name or author
      </Text>
    </CardBooksNotFound>
  )
}
