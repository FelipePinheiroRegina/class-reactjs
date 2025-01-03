import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function LoadingOrderDetailsSkeleton() {
    return (
        <div className='space-y-6'>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className='text-muted-foreground'>Status</TableCell>
                        <TableCell className='flex justify-end'>
                            <Skeleton className='h-5 w-20'/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className='text-muted-foreground'>Client</TableCell>
                        <TableCell className='flex justify-end'>
                            <Skeleton className='h-5 w-[164px]'/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className='text-muted-foreground'>Phone</TableCell>
                        <TableCell className='flex justify-end'>
                            <Skeleton className='h-5 w-[140px]'/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className='text-muted-foreground'>E-mail</TableCell>
                        <TableCell className='flex justify-end'>
                            <Skeleton className='h-5 w-[200px]'/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className='text-muted-foreground'>Carried out there</TableCell>
                        <TableCell className='flex justify-end'>
                            <Skeleton className='h-5 w-[148px]'/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className='text-right'>Qtd.</TableHead>
                        <TableHead className='text-right'>Price</TableHead>
                        <TableHead className='text-right'>Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 2 }).map((_, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <Skeleton className='h-5 w-[140px]'/>
                                </TableCell>
                                <TableCell className='text-right'>
                                    <Skeleton className='h-5 w-3 ml-auto'/>
                                </TableCell>
                                <TableCell className='text-right'>
                                    <Skeleton className='h-5 w-3 ml-auto'/>
                                </TableCell>
                                <TableCell className='text-right'>
                                    <Skeleton className='h-5 w-12 ml-auto'/>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Order total</TableCell>
                        <TableCell className='text-right font-medium'>
                            <Skeleton className='h-5 w-20'/>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}