import { axios } from '../../services/axios'
import { ReposProvider } from './useReposContext'
import { ReactNode, useEffect, useState } from 'react'

export interface Repos {
    id: number
    name: string,
    owner: {
        login: string
    },
    html_url: string,
    description: string,
    stargazers_count: number
    created_at: string
}

interface PropsReposContextProvider {
    children: ReactNode
}

export function ReposContextProvider({children}: PropsReposContextProvider) {
    const [ repos, setRepos ] = useState<Repos[]>([])
    const [ specificRepo, setSpecificRepo ] = useState<Repos>({} as Repos)

    async function fetchRepos() {
        const response = await axios.get('users/FelipePinheiroRegina/repos')

        setRepos(response.data)
    }

    async function fetchSpecificRepo(name: string) {
        const response = await axios.get(`search/repositories?q=${name}+user:felipepinheiroregina`)
        setSpecificRepo(response.data.items[0])
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    return (
        <ReposProvider.Provider 
            value={{
                repos,
                specificRepo,
                fetchSpecificRepo
            }}>
            {children}
        </ReposProvider.Provider>
    )
}