import { HomeContainer, Form, InfoPublications, GridResume } from './styles'
import { AuthorCard } from '../../components/AuthorCard'
import { Input } from '../../components/Input'
import { ResumePublicationCard } from '../../components/ResumePublicationCard'
import { useReposContext } from '../../contexts/ReposContext/useReposContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()
    const { repos } = useReposContext()
    const [search, setSearch ] = useState('')

    const filterRepos = search.length > 0 ? repos.filter((repo) => repo.name.includes(search)) : repos
    
    function handleNavigateRepo(name: string) {
        navigate(`publication/details/${name}`)
    }

    return (
        <HomeContainer>
            <AuthorCard/>

            <Form>
                <InfoPublications>
                    <strong>Publications</strong>
                    <span>{filterRepos.length} publications</span>
                </InfoPublications>
                <Input placeholder='Search content' onChange={(e) => setSearch(e.target.value)}/>
            </Form>

            <GridResume>
                {filterRepos.map((repo) => (
                    <ResumePublicationCard 
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        createdAt={repo.created_at}
                        onClick={() => handleNavigateRepo(repo.name)}
                    />
                ))}
            </GridResume>
        </HomeContainer>
    )
}