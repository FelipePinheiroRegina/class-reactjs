import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layouts } from '../layouts/LayoutDefault'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { ContextCycles } from '../contexts/ContextCycles'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ContextCycles>
                <Routes>
                    <Route path='/' element={<Layouts/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/history' element={<History/>}/>
                    </Route>
                </Routes>
            </ContextCycles>
        </BrowserRouter>
    )
}