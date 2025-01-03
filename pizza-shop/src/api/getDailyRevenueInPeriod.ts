import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodResponse {
    date: number,
    receipt: number
}

export async function getDailyRevenueInPeriod() {
  const response = await api.get<GetDailyRevenueInPeriodResponse[]>('/metrics/daily-receipt-in-period')

  return response.data
}
