import { PublicationDetailsContainer, Content } from './styles'
import { InfoPublicationCard } from '../../components/InfoPublicationCard'
import { useReposContext } from '../../contexts/ReposContext/useReposContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function PublicationDetails() {
    const { fetchSpecificRepo, specificRepo } = useReposContext()
    const { name } = useParams()

    useEffect(() => {
        if(!name) return
        fetchSpecificRepo(name)

    }, [fetchSpecificRepo, name])

    return (
        <PublicationDetailsContainer>
            <InfoPublicationCard 
                htmlUrl={specificRepo.html_url}
                name={specificRepo.name}
                createdAt={specificRepo.created_at}
                owner={specificRepo.owner && specificRepo.owner.login}
                stars={specificRepo.stargazers_count}
            />

            <Content>
                {specificRepo.description && specificRepo.description}                
            </Content>
        </PublicationDetailsContainer>
    )
}