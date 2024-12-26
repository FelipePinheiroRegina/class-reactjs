import { getOrderDetails } from '@/api/getOrderDetails'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import { OrderStatus } from './OrderStatus'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface OrderDetailsProps {
    orderId: string,
    open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
    const { data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open
    })

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Order: {orderId}</DialogTitle>
                <DialogDescription>Order details</DialogDescription>
            </DialogHeader>

            { order && (
                <div className='space-y-6'>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className='text-muted-foreground'>Status</TableCell>
                                <TableCell className='flex justify-end'>
                                    <OrderStatus status={order.status}/>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className='text-muted-foreground'>Client</TableCell>
                                <TableCell className='flex justify-end'>
                                    {order.customer.name}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className='text-muted-foreground'>Phone</TableCell>
                                <TableCell className='flex justify-end'>
                                    {order.customer.phone ?? 'Not informed'}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className='text-muted-foreground'>E-mail</TableCell>
                                <TableCell className='flex justify-end'>
                                    {order.customer.email}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className='text-muted-foreground'>Carried out there</TableCell>
                                <TableCell className='flex justify-end'>
                                    {formatDistanceToNow(order.createdAt, {
                                        locale: ptBR,
                                        addSuffix: true
                                    })}
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
                            {order.orderItems.map((item) => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.product.name}</TableCell>
                                        <TableCell className='text-right'>{item.quantity}</TableCell>
                                        <TableCell className='text-right'>
                                            {(item.priceInCents / 100).toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}
                                        </TableCell>
                                        <TableCell className='text-right'>
                                            {(item.priceInCents * item.quantity / 100).toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Order total</TableCell>
                                <TableCell className='text-right font-medium'>
                                    {(order.totalInCents / 100).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            )}
        </DialogContent>
    )
}