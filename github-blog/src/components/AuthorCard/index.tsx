import { AuthorCardContainer, Card, Image, Details, UserDescription, UserInfo } from './styles'
import { FaGithub, FaBuilding, FaUserGroup, FaArrowUpRightFromSquare  } from 'react-icons/fa6'
import { Subtitle } from '../Subtitle'
import feBlue from '../../assets/feBlue.png'
import { useUserContext } from '../../contexts/UserContext/useUserContext'

export function AuthorCard() {
    const { user } = useUserContext()

    return (
        <AuthorCardContainer>
            <Card>
                <Image src={feBlue}/>
                <Details>
                    <UserDescription>
                        <div>
                            <h1>{user.name}</h1>
                            <a href={user.html_url} target='_blank'><span>GITHUB</span><FaArrowUpRightFromSquare/> </a>
                        </div>
                        
                        <p>{user.bio}</p>
                    </UserDescription>

                    <UserInfo>
                        <span><FaGithub/> <Subtitle>{user.login}</Subtitle></span>
                        <span><FaBuilding/> <Subtitle>{user.company}</Subtitle></span>
                        <span><FaUserGroup/> <Subtitle>{user.followers}</Subtitle></span>
                    </UserInfo>
                </Details>
            </Card>
        </AuthorCardContainer>
    )
}