import { http, HttpResponse } from 'msw'
import { GetDayOrdersAmountResponse } from '../getDayOrdersAmount'

export const getDayOrdersAmountMock = http.get<
    never, 
    never, 
    GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', async () => {
    return HttpResponse.json({
        amount: 20,
        diffFromYesterday: -7
    })
})