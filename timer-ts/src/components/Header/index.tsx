import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/Logo.svg'
import { Timer, Scroll } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoIgnite}/>

            <nav>
                <NavLink to='/' title='Timer'>
                    <Timer/>
                </NavLink>

                <NavLink to='/history' title='Histórico'>
                    <Scroll/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}