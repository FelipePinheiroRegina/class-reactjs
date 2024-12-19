import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/getProfile'
import { getMangedRestaurant } from '@/api/getManagedRestaurant'

export function AccountMenu() {
    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile
    })

    const { data: managedRestaurant } = useQuery({
        queryKey: ['managedRestaurant'],
        queryFn: getMangedRestaurant
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex items-center gap-2 select-none'>
                    {managedRestaurant?.name}
                    <ChevronDown className='h-4 w-4'/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel className='flex flex-col'>
                    <span>{profile?.name}</span>
                    <span className='text-xs font-normal text-muted-foreground'>{profile?.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className='mr-2 w-4 h-4'/>
                    <span>Store profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
                    <LogOut className='mr-2 w-4 h-4'/>
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}