import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './signin-mock'
import { registerRestaurantMock } from './registerRestaurant-mock'
import { getDayOrdersAmountMock } from './getDayOrdersAmount-mock'
import { getMonthOrdersAmountMock } from './getMonthOrdersAmount-mock'
import { getMonthCancelOrdersAmountMock } from './getMonthCancelOrdersAmount-mock'
import { getMonthRevenueMock } from './getMonthRevenue-mock'
import { getDailyRevenueInPeriodMock } from './getDailyRevenueInPeriod-mock'
import { getPopularProductsMock } from './getPopularProducts-mock'
import { getProfileMock } from './getProfile-mock'
import { getManagedRestaurantMock } from './getManagedRestaurant-mock'
import { updateProfileMock } from './updateProfile-mock'
import { getOrdersMock } from './getOrders-mock'
import { getOrdersDetailsMock } from './getOrdersDetails-mock'
import { approveOrderMock } from './approveOrder-mock'
import { cancelOrderMock } from './cancelOrder-mock'
import { deliverOrderMock } from './deliverOrder-mock'
import { dispatchOrderMock } from './dispatchOrder-mock'

export const worker = setupWorker(
    signInMock, 
    registerRestaurantMock, 
    getDayOrdersAmountMock,
    getMonthOrdersAmountMock,
    getMonthCancelOrdersAmountMock,
    getMonthRevenueMock,
    getDailyRevenueInPeriodMock,
    getPopularProductsMock,
    getProfileMock,
    getManagedRestaurantMock,
    updateProfileMock,
    getOrdersMock,
    getOrdersDetailsMock,
    approveOrderMock,
    cancelOrderMock,
    deliverOrderMock,
    dispatchOrderMock
)

export async function enableMSW() {
    if(env.MODE !== 'test') {
        return 
    }
    await worker.start()
}