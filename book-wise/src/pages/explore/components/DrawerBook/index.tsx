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
interface DrawerBookProps {
  open: boolean
  onOpenChange: (value: DrawerOpenChangeDetails) => void
}

export function DrawerBook({ onOpenChange, open }: DrawerBookProps) {
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
              <BookDetails />
              <div>
                <div className="auth">
                  <Text size="sm">Reviews</Text>
                  <DialogAuth />
                </div>

                <div className="reviews">
                  <Comment />
                  <Review />
                  <Review />
                </div>
              </div>
            </DrawerBodyStyled>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
