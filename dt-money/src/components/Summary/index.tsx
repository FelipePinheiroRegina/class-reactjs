import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { SummaryContainer, Card } from './styles'
import { formatMoney } from '../../formattingFunctions/formatMoney'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
    const { income, outcome, total} = useSummary()

    return (
        <SummaryContainer>
            <div className="centralize">
                <Card $colorIcon='green'>
                    <div>
                        <span className='title'>Income</span>
                        <span><ArrowCircleUp/></span>
                    </div>
                    <strong className='value'>{formatMoney(income)}</strong>
                </Card>
                <Card $colorIcon='red'>
                    <div>
                        <span className='title'>Outcome</span>
                        <span><ArrowCircleDown/></span>
                    </div>
                    <strong className='value'>{formatMoney(outcome)}</strong>
                </Card>
                <Card $colorIcon='white' $variant='filled'>
                    <div>
                        <span className='title'>Total</span>
                        <span><CurrencyDollar/></span>
                    </div>
                    <strong className='value'>{formatMoney(total)}</strong>
                </Card>
            </div>
        </SummaryContainer>
    )
}