import { LayoutDefaultContainer, BannerContainer, Image, Logo, ImageTerminal, Phrase } from './styles'
import effectLeft from '../../assets/effect-left.png'
import effectRight from '../../assets/effect-right.png'
import imageTerminal from '../../assets/terminal-solid 1.svg'

import { Outlet } from 'react-router-dom'

export function LayoutDefault() {
    return (
        <LayoutDefaultContainer>
            <BannerContainer>
                <Image src={effectLeft}/>

                <Logo>
                    <ImageTerminal src={imageTerminal}/>
                    <Phrase>GITHUB BLOG</Phrase>
                </Logo>

                <Image src={effectRight}/>
            </BannerContainer>
            
            <Outlet/>
        </LayoutDefaultContainer>
    )
}