import { http, HttpResponse } from 'msw'
import { GetMonthRevenueResponse } from '../getMonthRevenue'

export const getMonthRevenueMock = http.get<
    never, 
    never, 
    GetMonthRevenueResponse
>('/metrics/month-receipt', async () => {
    return HttpResponse.json({
        receipt: 50000,
        diffFromLastMonth: 3
    })
})