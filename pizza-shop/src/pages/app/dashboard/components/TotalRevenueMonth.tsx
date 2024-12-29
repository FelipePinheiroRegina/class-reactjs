import { getMonthRevenue } from '@/api/getMonthRevenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

export function TotalRevenueMonth() {

    const { data: totalRevenueMonth } = useQuery({
        queryFn: getMonthRevenue,
        queryKey: ['metrics', 'totalMonthRevenue']
    })

    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-base font-semibold'>
                Total revenue (month)
            </CardTitle>
            
            <DollarSign className='h-4 w-4 text-muted-foreground'/>
            </CardHeader>
            <CardContent className='space-y-1'>
                { totalRevenueMonth && (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>
                            {(totalRevenueMonth.receipt / 100).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            { totalRevenueMonth.diffFromLastMonth >= 0 ? (
                                <>
                                    <span className='text-emerald-500 dark:text-emerald-400'>+{totalRevenueMonth.diffFromLastMonth}%</span> compared to last month
                                </>
                            ) : 
                                <>
                                    <span className='text-rose-500 dark:text-rose-400'>{ totalRevenueMonth.diffFromLastMonth}%</span> compared to last month
                                </>
                            }
                        </p> 
                    </>
                )}
            </CardContent>
        </Card>
    )
}