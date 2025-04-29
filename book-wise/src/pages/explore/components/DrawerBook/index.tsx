import {
  Drawer,
  DrawerOpenChangeDetails,
  Portal,
  CloseButton,
} from '@chakra-ui/react'

import { DrawerBodyStyled } from './styles'
import { BookDetails } from './components/BookDetails'
import { Comment } from './components/Comment'
import { Text } from '@/components/Text'
import { Review } from './components/Review'
import { DialogAuth } from '@/components/DialogAuth'
import { useQuery } from '@tanstack/react-query'
import { getBookById } from '@/api/get-book-by-id'
import { User } from 'next-auth'
interface DrawerBookProps {
  open: boolean
  onOpenChange: (value: DrawerOpenChangeDetails) => void
  bookId: string
  user: User | null
}

export function DrawerBook({
  onOpenChange,
  open,
  bookId,
  user,
}: DrawerBookProps) {
  const { data: bookData, isLoading: isLoadingBookData } = useQuery({
    queryKey: ['get-book-by-id', bookId],
    queryFn: async () => await getBookById({ bookId }),
    enabled: open && !!bookId,
  })

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} size="lg">
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title srOnly>
                component drawer book, reviews about the book
              </Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <DrawerBodyStyled>
              {isLoadingBookData ? (
                <>CARREGANDO...</>
              ) : (
                <>
                  {bookData && <BookDetails props={bookData} />}
                  <div>
                    <div className="auth">
                      <Text size="sm">Reviews</Text>
                      {!user && <DialogAuth />}
                    </div>

                    <div className="reviews">
                      {user && <Comment bookId={bookId} />}
                      {bookData?.ratings.map((rating) => (
                        <Review key={rating.id} props={rating} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </DrawerBodyStyled>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
