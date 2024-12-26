import { Building, ChevronDown, LogOut } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { Dialog, DialogTrigger } from './ui/dialog'
import { StoreProfileDialog } from './StoreProfileDialog'

import { useMutation, useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/getProfile'
import { getMangedRestaurant } from '@/api/getManagedRestaurant'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@/api/signout'


export function AccountMenu() {
    const navigate = useNavigate()
    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity
    })

    const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
        queryKey: ['managedRestaurant'],
        queryFn: getMangedRestaurant,
        staleTime: Infinity
    })

    const { mutateAsync: signOutFn, isPending: isSignOutPending } = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            navigate('/signin', { replace: true })
        }
    })

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='flex items-center gap-2 select-none'>
                        {isLoadingManagedRestaurant ?
                           ( <Skeleton className='h-4 w-40'/> )
                            :
                           ( managedRestaurant?.name)
                        }
                        <ChevronDown className='h-4 w-4'/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                    <DropdownMenuLabel className='flex flex-col'>
                        {isLoadingProfile ? (
                            <div className='space-y-1.5'>
                                <Skeleton className='h-4 w-32'/>
                                <Skeleton className='h-3 w-24'/>
                            </div>
                        ) : (
                            <>
                                <span>{profile?.name}</span>
                                <span className='text-xs font-normal text-muted-foreground'>{profile?.email}</span>
                            </>
                        )}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className='mr-2 w-4 h-4'/>
                            <span>Store profile</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem className='text-rose-500 dark:text-rose-400' 
                        asChild 
                        disabled={isSignOutPending}
                    >
                        <button className='w-full' onClick={() => signOutFn()}>
                            <LogOut className='mr-2 w-4 h-4'/>
                            <span>Logout</span>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <StoreProfileDialog/>
        </Dialog>
    )
}