import { useMutation, useQuery } from '@tanstack/react-query'
import { Button } from './ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { getMangedRestaurant } from '@/api/getManagedRestaurant'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { updateProfile } from '@/api/updateProfile'
import { toast } from 'sonner'
import { queryClient } from '@/lib/react-query'
import { GetMangedRestaurantBody } from '../api/getManagedRestaurant'

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string().nullable()
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
    const { data: managedRestaurant } = useQuery({
        queryKey: ['managedRestaurant'],
        queryFn: getMangedRestaurant,
        staleTime: Infinity
    })

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<StoreProfileSchema>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? ''
        }
    })

    function updateMangedRestaurantCache({ name, description }: StoreProfileSchema) {
        const cached = queryClient.getQueryData<GetMangedRestaurantBody>(['managedRestaurant'])

        if(cached) {
            queryClient.setQueryData(['managedRestaurant'], {
                ...cached,
                name,
                description
            })
        }

        return { cached }
    }

    const { mutateAsync: updateProfileFn } = useMutation({
        mutationFn: updateProfile,
        onMutate({ name, description }) {
            const { cached } = updateMangedRestaurantCache({ name, description })

            return { previousCachedProfile: cached }
        },

        onError(_, __, context) {
            if(context?.previousCachedProfile) {
                updateMangedRestaurantCache(context.previousCachedProfile)
            }
        }
    })

    async function handleUpdateProfile(data: StoreProfileSchema) {
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description
            })

            toast.success('Profile updated')

        } catch {
            toast.error('Unable to update, try again!')
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Store profile </DialogTitle>
                <DialogDescription>
                    update your establishment's information visible to your customer
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className='space-y-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right' htmlFor='name'>Name</Label>
                        <Input className='col-span-3' id='name' {...register('name')}/>
                    </div>
                </div>

                <div className='space-y-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right' htmlFor='description'>Description</Label>
                        <Textarea 
                            className='col-span-3' 
                            id='description' 
                            {...register('description')}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='ghost' type='button'>Cancel</Button>
                    </DialogClose>

                    <Button type='submit' variant='success' disabled={isSubmitting}> Save </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}