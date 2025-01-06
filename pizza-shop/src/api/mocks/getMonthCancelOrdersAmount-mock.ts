import { http, HttpResponse } from 'msw'
import { GetMonthCancelOrdersAmountResponse } from '../getMonthCancelOrdersAmount'

export const getMonthCancelOrdersAmountMock = http.get<
    never, 
    never, 
    GetMonthCancelOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', async () => {
    return HttpResponse.json({
        amount: 5,
        diffFromLastMonth: -5
    })
})