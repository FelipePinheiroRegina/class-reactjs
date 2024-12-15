import { Outlet } from 'react-router-dom'

export function AuthOutlet() {
    return (
        <div>
            <span>authentication</span>
            <Outlet/>
        </div>
    )
}