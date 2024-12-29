import { Helmet } from 'react-helmet-async'
import { TotalRevenueMonth } from './components/TotalRevenueMonth'
import { AmountOrdersPerMonth } from './components/AmountOrdersPerMonth'
import { AmountOrdersPerDay } from './components/AmountOrdersPerDay'
import { AmountOrdersCancelledPerMonth } from './components/AmountOrdersCanceledPerMonth'
import { RevenueChart } from './components/RevenueChart'
import { PopularProductsChart } from './components/PopularProductsChart'

export function Dashboard() {
  return (
    <>
      <Helmet title='Dashboard'/>
      
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

        <div className='grid grid-cols-4 gap-4'>
          <TotalRevenueMonth/> 
          <AmountOrdersPerMonth/> 
          <AmountOrdersPerDay/>
          <AmountOrdersCancelledPerMonth/>
        </div>

        <div className='grid  grid-cols-9 gap-4'>
          <RevenueChart/>
          <PopularProductsChart/>
        </div>
      </div>
    </>
  )
}
