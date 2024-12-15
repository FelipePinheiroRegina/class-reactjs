import { SubtitleContainer } from './styles'
import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode
}

export function Subtitle({children, ...props }: Props) {
    return (
        <SubtitleContainer {...props}>
            { children }
        </SubtitleContainer>
    )
}