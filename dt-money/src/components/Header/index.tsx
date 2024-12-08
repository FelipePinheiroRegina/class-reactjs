import { HeaderContainer, HeaderContent, Logo, Button } from './styles'
import logoIgnite from '../../assets/ignite.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransaction } from '../NewTransaction'
import { useState } from 'react'

export function Header() {
    const [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <img src={logoIgnite}/>
                    <span>DT Money</span>
                </Logo>
                
               
                <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Button className="Button Green" aria-label="Open new transaction form">
                        New transaction
                    </Button>
                </Dialog.Trigger>

                    <NewTransaction closeModal={closeModal}/>
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}