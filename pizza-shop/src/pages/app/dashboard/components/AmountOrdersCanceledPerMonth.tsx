import { getMonthCancelOrdersAmount } from '@/api/getMonthCancelOrdersAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { TicketMinus } from 'lucide-react'
import { LoadingCardSkeleton } from './LoadingCardSkeleton'

export function AmountOrdersCancelledPerMonth() {

    const { data: ordersCanceledMonth } = useQuery({
        queryFn: getMonthCancelOrdersAmount,
        queryKey: ['metrics', 'monthCanceledOrdersAmount']
    })

    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-base font-semibold'>
                Cancelled (month)
            </CardTitle>
            
            <TicketMinus className='h-4 w-4 text-muted-foreground'/>
            </CardHeader>
            <CardContent className='space-y-1'>
                { ordersCanceledMonth ? (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>
                            {ordersCanceledMonth.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            { ordersCanceledMonth.diffFromLastMonth < 0 ? (
                                <>
                                    <span className='text-emerald-500 dark:text-emerald-400'>{ordersCanceledMonth.diffFromLastMonth}%</span> compared to last month
                                </>
                            ) : 
                                <>
                                    <span className='text-rose-500 dark:text-rose-400'>+{ ordersCanceledMonth.diffFromLastMonth}%</span> compared to last month
                                </>
                            }
                        </p> 
                    </>
                ) : (
                    <LoadingCardSkeleton/>
                )}
            </CardContent>
        </Card>
    )
}