import { createContext, useContext } from 'react'
import { Repos } from './ReposContext'

export interface ReposProviderInterface {
    repos: Repos[],
    specificRepo: Repos,
    fetchSpecificRepo: (name: string) => Promise<void>
}

export const ReposProvider = createContext({} as ReposProviderInterface)

export function useReposContext() {
    const context = useContext(ReposProvider)

    if(!context) {
        throw new Error('you need to use context around child components')
    }

    return context
}