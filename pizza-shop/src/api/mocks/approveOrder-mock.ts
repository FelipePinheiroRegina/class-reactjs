import { http, HttpResponse } from 'msw'

import { ApproveOrderParams } from '../approveOrder'

export const approveOrderMock = http.patch<ApproveOrderParams>(
    '/orders/:orderId/approve',
    async ({ params }) => {
        if(params.orderId === 'error-order-id') {
            return new HttpResponse(null, { status: 400 })
        }

        return new HttpResponse(null, { status: 204 })
    }
)