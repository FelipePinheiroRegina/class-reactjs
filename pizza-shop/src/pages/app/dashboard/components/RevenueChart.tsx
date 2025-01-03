import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import colors from 'tailwindcss/colors'

import { 
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line
} from 'recharts'
import { useQuery } from '@tanstack/react-query'
import { getDailyRevenueInPeriod } from '@/api/getDailyRevenueInPeriod'

export function RevenueChart() {
    const { data: revenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period'],
        queryFn: getDailyRevenueInPeriod
    })

    return (
        <Card className='col-span-6'>
            <CardHeader className='flex-row items-center justify-between pb-8'>
                <div className='space-y-1'>
                    <CardTitle className='text-base font-medium'>Revenue in the period</CardTitle>
                    <CardDescription>Daily revenue in the period</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                { revenueInPeriod && (
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart data={revenueInPeriod} style={{ fontSize: 12 }}>
                            <XAxis 
                                dataKey='date'
                                tickLine={false}
                                dy={16}
                            />

                            <YAxis 
                                stroke='#888' 
                                axisLine={false} 
                                tickLine={false} 
                                width={80}
                                tickFormatter={(value: number) => value.toLocaleString('pt-BR', { 
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            />
                            
                            <CartesianGrid vertical={false} className='stroke-muted'/>

                            <Line 
                                type='linear' 
                                strokeWidth={2} 
                                dataKey="receipt"
                                stroke={colors.violet['500']}
                                
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </CardContent>
        </Card>
    )
}