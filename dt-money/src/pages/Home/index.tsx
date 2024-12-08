import { Header } from '../../components/Header'
import { HomeContainer } from './styles'
import { Summary } from '../../components/Summary'
import { TableTransactions } from '../../components/TableTransactions'

export function Home() {
    return (
        <HomeContainer>
            <Header/>
            <Summary/>
            <TableTransactions/>
        </HomeContainer>
    )
}