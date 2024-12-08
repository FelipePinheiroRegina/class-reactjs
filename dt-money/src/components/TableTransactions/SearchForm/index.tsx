import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'
import { ContextTransactions } from '../../../contexts/contextTransactions'
import { memo } from 'react'

const schemaFormSearch = zod.object({
    search: zod.string()
})

export type TypeFormSearch = zod.infer<typeof schemaFormSearch>

function SearchFormNormal() {
    const fetchTransactions = useContextSelector(ContextTransactions, (context) => {
        return context.fetchTransactions
    })

    const { register, handleSubmit, formState } = useForm<TypeFormSearch>({
        resolver: zodResolver(schemaFormSearch),
        defaultValues: {
            search: ''
        }
    })

    const { isSubmitting } = formState
    
    async function onSubmit({ search }: {search: string}) {
        await fetchTransactions(search)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder='Search transaction'
                {...register('search')}

            />
            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass/>
                <span>Search</span>
            </button>
        </SearchFormContainer>
    )
}

export const SearchForm = memo(SearchFormNormal)