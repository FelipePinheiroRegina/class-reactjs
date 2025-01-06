import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../getDailyRevenueInPeriod'

export const getDailyRevenueInPeriodMock = http.get<
    never,
    never,
    GetDailyRevenueInPeriodResponse[]
>('/metrics/daily-receipt-in-period', () => {
    return HttpResponse.json([
        { date: '01/01/2025', receipt: 2000 },
        { date: '02/01/2025', receipt: 800 },
        { date: '03/01/2025', receipt: 456 },
        { date: '04/01/2025', receipt: 588 },
        { date: '05/01/2025', receipt: 897 },
        { date: '06/01/2025', receipt: 431 },
        { date: '07/01/2025', receipt: 1324 },
    ])
})