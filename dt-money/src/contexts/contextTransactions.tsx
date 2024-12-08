import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../config/axios'

export interface PropsTransactions {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
}

export interface TransactionsContext {
    transactions: PropsTransactions[],
    fetchTransactions: (search?: string) => Promise<void>,
    createTransaction: (data: ToCreateNewTransaction) => Promise<void>
}

interface ToCreateNewTransaction {
    description: string,
    category: string,
    price: number,
    type: 'income' | 'outcome'
}

interface PropsTransactionsProvider {
    children: ReactNode
}
// eslint-disable-next-line
export const ContextTransactions = createContext({} as TransactionsContext)

export function TransactionsProvider({children}: PropsTransactionsProvider) {
    const [ transactions, setTransactions ] = useState<PropsTransactions[]>([])

    const fetchTransactions = useCallback(async (search?: string) => {
        const response = await api.get('transactions?_sort=createdAt&_order=desc', {
            params: {
                q: search
            }
        })

        setTransactions(response.data)
    }, [])

    const createTransaction = useCallback(async (data: ToCreateNewTransaction) => {
        const { category, description, price, type} = data

        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date()
        })

        setTransactions((state) => [response.data, ...state])
    }, [])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return (
        <ContextTransactions.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {children}
        </ContextTransactions.Provider>
    )
}