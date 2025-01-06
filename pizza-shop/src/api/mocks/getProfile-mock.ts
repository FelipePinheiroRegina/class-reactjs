import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../getProfile'

export const getProfileMock = http.get<
    never,
    never,
    GetProfileResponse
>('/me', () => {
    return HttpResponse.json({
        id: 'doaskodkaspdk',
        name: 'Custom Pizza',
        email: 'pizza@email.com',
        phone: '00000000',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: null
    })
})