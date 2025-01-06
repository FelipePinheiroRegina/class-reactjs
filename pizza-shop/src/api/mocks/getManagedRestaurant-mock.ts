import { http, HttpResponse } from 'msw'

import { GetMangedRestaurantResponse } from '../getManagedRestaurant'

export const getManagedRestaurantMock = http.get<
    never,
    never,
    GetMangedRestaurantResponse
>('/managed-restaurant', () => {
    return HttpResponse.json({
        id: 'sapdkkaosdk',
        managerId: 'dapskdpakspdsa',
        name: 'Pizza Shop',
        description: 'Pizza shop, pizzas boas e baratas',
        createdAt: new Date(),
        updatedAt: null
    })
})