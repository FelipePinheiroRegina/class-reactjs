import { InfoPublicationCardContainer, Content, Nav, Infos } from './styles'
import { NavLink } from 'react-router-dom'
import { FaAngleLeft, FaArrowUpRightFromSquare, FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa6'
import { Subtitle } from '../Subtitle'

interface PropsInfoPublication {
    htmlUrl: string,
    name: string,
    owner: string,
    createdAt: string,
    stars: number
}

export function InfoPublicationCard({ createdAt, htmlUrl, name, owner, stars}: PropsInfoPublication) {
    return (
        <InfoPublicationCardContainer>
            <Content>
                <Nav>
                    <NavLink to='/'>
                        <FaAngleLeft/>
                        <span>BACK</span>
                    </NavLink>

                    <a href={htmlUrl && htmlUrl}>
                        <span>SEE GITHUB</span>
                        <FaArrowUpRightFromSquare/>
                    </a>
                </Nav>

                <h1>{name}</h1>
                
               <Infos>
                    <span><FaGithub/><Subtitle>{owner && owner}</Subtitle></span>
                    <span><FaCalendarDay/><Subtitle>{createdAt && createdAt}</Subtitle></span>
                    <span><FaComment/><Subtitle>{stars && stars} comments</Subtitle></span>
               </Infos>
            </Content>
        </InfoPublicationCardContainer>
    )
}