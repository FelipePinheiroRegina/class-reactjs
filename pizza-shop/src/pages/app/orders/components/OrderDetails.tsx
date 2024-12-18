import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function OrderDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Order: 45454534521435124</DialogTitle>
                <DialogDescription>Order details</DialogDescription>
            </DialogHeader>

            <div className='space-y-6'>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className='text-muted-foreground'>Status</TableCell>
                            <TableCell className='flex justify-end'>
                                <div className='flex items-center gap-2'>
                                    <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                                    <span className='font-medium text-muted-foreground'>
                                        Pending
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>Client</TableCell>
                            <TableCell className='flex justify-end'>
                                Felipe Pinheiro
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>Phone</TableCell>
                            <TableCell className='flex justify-end'>
                               (14) 99777-8955
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>E-mail</TableCell>
                            <TableCell className='flex justify-end'>
                                flppinheiro@hotmail.com
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>Carried out there</TableCell>
                            <TableCell className='flex justify-end'>
                                15 minutes ago
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
                        <TableRow>
                            <TableCell>Pizza Pepperoni Family</TableCell>
                            <TableCell className='text-right'>2</TableCell>
                            <TableCell className='text-right'>R$ 69,90</TableCell>
                            <TableCell className='text-right'>R$ 139,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Bauru</TableCell>
                            <TableCell className='text-right'>1</TableCell>
                            <TableCell className='text-right'>R$ 59,90</TableCell>
                            <TableCell className='text-right'>R$ 59,90</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Chicken</TableCell>
                            <TableCell className='text-right'>2</TableCell>
                            <TableCell className='text-right'>R$ 50,00</TableCell>
                            <TableCell className='text-right'>R$ 100,00</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Order total</TableCell>
                            <TableCell className='text-right font-medium'>
                                R$ 299,70
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}