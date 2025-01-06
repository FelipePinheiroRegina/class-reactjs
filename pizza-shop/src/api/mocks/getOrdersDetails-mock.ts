import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams ,GetOrderDetailsResponse } from '../getOrderDetails'

export const getOrdersDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
    '/orders/:orderId',
    async ({ params }) => {
        return HttpResponse.json({
            id: params.orderId,

            customer: {
                name: 'John Doe',
                email: 'jhondoe@example.com',
                phone: '1234567890',
            },
            status: 'pending',
            createdAt: new Date().toISOString(),
            totalInCents: 5000,
            orderItems: [
                { 
                    id: 'order-item-1',
                    priceInCents: 1000,
                    product: { name: 'Pizza Pepperoni'},
                    quantity: 1
                },
                { 
                    id: 'order-item-1',
                    priceInCents: 2000,
                    product: { name: 'Pizza Marguerita'},
                    quantity: 2
                }
            ]
        })
    }
)