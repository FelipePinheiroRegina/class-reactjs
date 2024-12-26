import { api } from '@/lib/axios'

export interface ApproveOrderParams {
    orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderParams) {
    const response = await api.patch(`/orders/${orderId}/approve`)

    return response.data
}