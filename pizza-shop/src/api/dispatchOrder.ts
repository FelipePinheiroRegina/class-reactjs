import { api } from '@/lib/axios'

export interface DispatchOrderParams {
    orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderParams) {
    const response = await api.patch(`/orders/${orderId}/dispatch`)

    return response.data
}