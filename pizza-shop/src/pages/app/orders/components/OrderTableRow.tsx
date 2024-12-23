import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrderDetails } from './OrderDetails'

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant='outline' size='xs'>
                            <Search className='h-3 w-3'/>
                            <span className='sr-only'>Order details</span>
                        </Button>
                    </DialogTrigger>
                    
                    <OrderDetails/>
                </Dialog>
            </TableCell>

            <TableCell className='font-mono text-sm font-medium'>adpasd32oko21kp12el</TableCell>
            <TableCell>15 minutes ago</TableCell>
            <TableCell>
                <div className='flex items-center gap-2'>
                    <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                    <span className='font-medium text-muted-foreground'>
                        Pending
                    </span>
                </div>
            </TableCell>
            <TableCell className='font-medium'>Felipe Pinheiro Regina</TableCell>
            <TableCell className='font-medium'>R$ 149,98</TableCell>
            <TableCell> 
                <Button variant='outline' size='xs'>
                    <ArrowRight className='h-3 w-3 mr-2'/>
                    Approve
                </Button> 
            </TableCell>
            <TableCell> 
                <Button variant='ghost' size='xs'>
                    <X className='h-3 w-3 mr-2'/>
                    Cancel
                </Button> 
            </TableCell>
        </TableRow>
    )
}