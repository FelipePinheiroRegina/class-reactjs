import { ResumePublicationCardContainer } from './styles'
import { formatDistanceToNow, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { HTMLAttributes } from 'react'

interface PropsResume extends HTMLAttributes<HTMLDivElement> {
    name: string,
    createdAt: string,
    description: string
}

export function ResumePublicationCard({name, description, createdAt, ...props}: PropsResume) {

    const distance = formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
        locale: ptBR
    })

    const normalDate = format(new Date(createdAt), 'dd/MM/yyyy H:mm aa', {
        locale: ptBR
    })

    return (
        <ResumePublicationCardContainer {...props}>
            <div>
                <h1>{name}</h1>
                <time dateTime={normalDate}>{distance}</time>
            </div>

            <p>{description}</p>
        </ResumePublicationCardContainer>
    )
}