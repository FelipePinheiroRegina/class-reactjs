import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../outlets/LayoutDefault'
import { Home } from '../pages/Home'
import { PublicationDetails } from '../pages/PublicationDetails'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutDefault/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/publication/details/:name' element={<PublicationDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}