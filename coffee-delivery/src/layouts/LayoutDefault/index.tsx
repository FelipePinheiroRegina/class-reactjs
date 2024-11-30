import { LayoutDefaultContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function LayoutDefault() {
	return (
		<LayoutDefaultContainer>
			<Header/>
			<Outlet/>
		</LayoutDefaultContainer>
	)
}