import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableRow } from './components/OrderTableRow'
import { OrderTableFilters } from './components/OrderTableFilters'
import { Pagination } from '@/components/Pagination'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/getOrders'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

export function Orders() {
    const [ searchParams, setSearchParams ] = useSearchParams()

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    const pageIndex = z.coerce.number()
        .transform(page => page - 1)
        .parse(searchParams.get('page') ?? '1')

    const { data: result } = useQuery({
        queryKey: ['orders', pageIndex, orderId, customerName, status],
        queryFn: () =>  getOrders({ 
            pageIndex, 
            orderId , 
            customerName, 
            status: status === 'all' ? null : status
        }),
    })

    function handlePaginate(pageIndex: number) {
        setSearchParams(state => {
            state.set('page', (pageIndex + 1).toString())

            return state
        })
    }

    return (
        <>
            <Helmet title='Orders'/>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold tracking-tight'>Orders</h1>
            
                <div className='space-y-2.5'>
                    <OrderTableFilters/>

                    <div className='border rounded-md'>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='w-[64px]'></TableHead>
                                    <TableHead className='w-[140px]'>Identifier</TableHead>
                                    <TableHead className='w-[180px]'>Carried out there</TableHead>
                                    <TableHead className='w-[140px]'>Status</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead className='w-[140px]'>Order total</TableHead>
                                    <TableHead className='w-[164px]'></TableHead>
                                    <TableHead className='w-[132px]'></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {result && result.orders.map(order => {
                                return <OrderTableRow key={order.orderId} order={order}/>
                            })}
                            </TableBody>
                        </Table>
                    </div>

                    {result && (
                        <Pagination 
                            onPageChange={handlePaginate}
                            pageIndex={result.meta.pageIndex} 
                            totalCount={result.meta.totalCount} 
                            perPage={result.meta.perPage}
                        />
                    )}
                </div>
            </div>
        </>
    )
}