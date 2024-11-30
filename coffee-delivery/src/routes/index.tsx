import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../layouts/LayoutDefault'
import { Home } from '../pages/Home'
import { Shopping } from '../pages/Shopping'
import { OrderConfirmed } from '../pages/OrderConfirmed'

export function AppRoutes() {
	return (
		<BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
				<Routes>
					<Route path='/' element={<LayoutDefault/>}>
						<Route path='/' element={<Home/>}/>
						<Route path='/shopping' element={<Shopping/>}/>
						<Route path='/order' element={<OrderConfirmed/>}/>
					</Route>
				</Routes>
		</BrowserRouter>
	)
}