import { axios } from '../../services/axios'
import { UserProvider } from './useUserContext'
import { ReactNode, useEffect, useState } from 'react'

export interface User {
    login: string,
    html_url: string,
    name: string,
    company: string,
    bio: string,
    followers: number,
}

interface PropsUserContextProvider {
    children: ReactNode
}

export function UserContextProvider({children}: PropsUserContextProvider) {
    const [ user, setUser ] = useState({} as User)
    
    async function fetchUser() {
        const response = await axios.get('users/FelipePinheiroRegina')

        setUser({
            login: response.data.login,
            bio: response.data.bio,
            company: response.data.company,
            followers: response.data.followers,
            html_url: response.data.html_url,
            name: response.data.name
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <UserProvider.Provider value={{user}}>
            {children}
        </UserProvider.Provider>
    )
}