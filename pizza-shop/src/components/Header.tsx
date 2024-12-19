import { Separator } from '@radix-ui/react-separator'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { NavLink } from './NavLink'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { AccountMenu } from './AccountMenu'

export function Header() {
    return (
        <header className='border-b'>
            <div className='flex h-16 items-center gap-6 px-6'>
                <Pizza className='h-6 w-6'/>

                <Separator orientation='horizontal' className='h-6'/>

                <nav className='flex items-center space-x-4 lg:space-x-6'>
                    <NavLink to='/'>
                        <Home className='h-4 w-4'/>
                        Dashboard
                    </NavLink>
                    <NavLink to='/orders'>
                        <UtensilsCrossed className='h-4 w-4'/>
                        Orders
                    </NavLink>
                </nav>

                <div className='ml-auto flex items-center gap-2'>
                    <ThemeToggle/>
                    <AccountMenu/>
                </div>
            </div>
        </header>
    )
} 