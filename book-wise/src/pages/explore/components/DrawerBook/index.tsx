import {
  Drawer,
  DrawerOpenChangeDetails,
  Portal,
  CloseButton,
} from '@chakra-ui/react'

import { DrawerBodyStyled } from './styles'
import { Card } from '@/components/Card'

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
              <Card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                recusandae laudantium assumenda ea adipisci, ratione sunt
                expedita veritatis, magnam accusantium suscipit autem distinctio
                itaque cum esse saepe ad doloribus quia.
              </Card>
            </DrawerBodyStyled>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
