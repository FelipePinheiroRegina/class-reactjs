import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../getPopularProducts'

export const getPopularProductsMock = http.get<
    never,
    never,
    GetPopularProductsResponse
>('/metrics/popular-products', () => {
    return HttpResponse.json([
        { product: 'Pizza 01', amount: 5 },
        { product: 'Pizza 02', amount: 32},
        { product: 'Pizza 03', amount: 40},
        { product: 'Pizza 04', amount: 55},
        { product: 'Pizza 05', amount: 21},
    ])
})