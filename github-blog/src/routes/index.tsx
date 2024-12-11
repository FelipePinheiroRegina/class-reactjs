import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../outlets/LayoutDefault'
import { Home } from '../pages/Home'


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutDefault/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}