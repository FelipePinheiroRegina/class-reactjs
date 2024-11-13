import { HistoryContainer, TableContainer, Status } from './styles'
import { useContext } from 'react'
import { ContainerContextProps } from '../../contexts/ContextCycles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
    const { cycles } = useContext(ContainerContextProps)

    function formatDecimals(value: number) {
        return String(value).padStart(2, '0')
    }

    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Tarefa
                            </th>
                            <th>
                                Duração
                            </th>
                            <th>
                                Início
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        { cycles &&
                            cycles.map(cycle => (
                                <tr>
                                    <td>{cycle.task}</td>
                                    <td>{formatDecimals(cycle.durationMinutes)} minutos</td>

                                    <td>
                                        {formatDistanceToNow(new Date(cycle.startDate), {
                                            addSuffix: true,
                                            locale: ptBR
                                        })}
                                    </td>

                                    <td>
                                        { (!cycle.finishedDate && !cycle.interruptedDate) &&
                                            <Status $nameColor='yellow'>
                                                Em andamento
                                            </Status>
                                        }

                                        { cycle.interruptedDate &&
                                            <Status $nameColor='red'>
                                                Interrompido
                                            </Status>
                                        }
 
                                        { cycle.finishedDate &&
                                            <Status $nameColor='green'>
                                                Concluído
                                            </Status>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </TableContainer>
        </HistoryContainer>
    )
}