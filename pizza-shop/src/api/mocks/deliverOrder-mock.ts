import { http, HttpResponse } from 'msw'

import { DeliverOrderParams } from '../deliverOrder'

export const deliverOrderMock = http.patch<DeliverOrderParams>(
    '/orders/:orderId/deliver',
    async ({ params }) => {
        if(params.orderId === 'error-order-id') {
            return new HttpResponse(null, { status: 400 })
        }

        return new HttpResponse(null, { status: 204 })
    }
)