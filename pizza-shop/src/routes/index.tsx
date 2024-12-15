import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppOutlet } from '@/pages/_outlets/AppOutlet'
import { AuthOutlet } from '@/pages/_outlets/AuthOutlet'

import { Dashboard } from '@/pages/App/Dashboard'
import { Signin } from '@/pages/Auth/Signin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthOutlet />, // Exclusivo para autenticação
    children: [
      { path: '/', element: <Signin /> }, // Removido o '/' inicial
    ],
  },
  
  {
    path: '/', // Exclusivo para a aplicação
    element: <AppOutlet />,
    children: [
      { path: '/dashboard', element: <Dashboard /> }, // Caminho relativo
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
