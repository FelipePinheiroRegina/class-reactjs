import { TableTransactionsContainer, TableContainer, Negative, Positive } from './styles'
import { formatMoney } from '../../formattingFunctions/formatMoney'
import { format } from 'date-fns'
import { useContextSelector } from 'use-context-selector'
import { ContextTransactions} from '../../contexts/contextTransactions'
import { SearchForm } from './SearchForm'


export function TableTransactions() {
    const transactions = useContextSelector(ContextTransactions, (context) => {
        return context.transactions
    })

    return (
        <TableTransactionsContainer>
            <SearchForm/>

            <TableContainer>
                <tbody>
                    { transactions &&
                        transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>
                                    {transaction.description}
                                </td>

                                <td>
                                    {transaction.type === 'outcome' ? <Negative> - {formatMoney(transaction.price)} </Negative> : <Positive> {formatMoney(transaction.price)} </Positive>}
                                </td>

                                <td>
                                    {transaction.category}
                                </td>

                                <td>
                                   {format(new Date(transaction.createdAt), 'dd/MM/yyyy')}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </TableContainer>
        </TableTransactionsContainer>
    )
}