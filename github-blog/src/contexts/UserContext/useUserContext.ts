import { createContext, useContext } from 'react'
import { User } from './UserContext'

export interface UserProviderInterface {
    user: User
}

export const UserProvider = createContext({} as UserProviderInterface)

export function useUserContext() {
    const context = useContext(UserProvider)

    if(!context) {
        throw new Error('you need to use context around child components')
    }

    return context
}