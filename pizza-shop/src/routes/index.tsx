import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { AppOutlet } from '@/pages/_outlets/AppOutlet'
import { AuthOutlet } from '@/pages/_outlets/AuthOutlet'

import { Dashboard } from '@/pages/App/Dashboard'
import { SignIn } from '@/pages/Auth/SignIn'
import { SignUp } from '@/pages/Auth/SignUp'

const router = createBrowserRouter([
  /*
  {
    path: '/',
    element: <AuthOutlet />, // Exclusivo para autenticação
    children: [
      { path: '/', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
  */
  {
    path: '/', // Exclusivo para a aplicação
    element: <AppOutlet />,
    children: [
      { path: '/', element: <Dashboard /> },
    ],
  },
])

export function Router() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />{' '}
      {/*%s = é uma variavel que muda de acordo como title que você passa nas pages*/}
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
