import { Outlet } from 'react-router-dom'

export function AppOutlet() {
    return (
        <div>
            <span>Cabeçalho</span>
            <Outlet/>
        </div>
    )
}
