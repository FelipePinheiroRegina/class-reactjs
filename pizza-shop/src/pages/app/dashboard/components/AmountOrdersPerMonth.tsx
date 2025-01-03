import { getMonthOrdersAmount } from '@/api/getMonthOrdersAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { UtensilsCrossed } from 'lucide-react'
import { LoadingCardSkeleton } from './LoadingCardSkeleton'

export function AmountOrdersPerMonth() {

    const { data: monthOrdersAmount } = useQuery({
        queryFn: getMonthOrdersAmount,
        queryKey: ['metrics', 'monthOrdersAmount']
    })
    
    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-base font-semibold'>
                Orders (month)
            </CardTitle>
            
            <UtensilsCrossed  className='h-4 w-4 text-muted-foreground'/>
            </CardHeader>
            <CardContent className='space-y-1'>
                { monthOrdersAmount ? (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>
                            {monthOrdersAmount.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            { monthOrdersAmount.diffFromLastMonth >= 0 ? (
                                <>
                                    <span className='text-emerald-500 dark:text-emerald-400'>+{monthOrdersAmount.diffFromLastMonth}%</span> compared to last month
                                </>
                            ) : 
                                <>
                                    <span className='text-rose-500 dark:text-rose-400'>{ monthOrdersAmount.diffFromLastMonth}%</span> compared to last month
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