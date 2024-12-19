import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { AppOutlet } from '@/pages/_outlets/AppOutlet'

import { AuthOutlet } from '@/pages/_outlets/AuthOutlet'

import { Dashboard } from '@/pages/app/dashboard/Dashboard'
import { Orders } from '@/pages/app/orders/Orders'

import { SignIn } from '@/pages/auth/SignIn'
import { SignUp } from '@/pages/auth/SignUp'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { NotFound } from '@/pages/404'

const router = createBrowserRouter([
  {
    path: '/', // Exclusivo para a aplicação
    element: <AppOutlet />,
    errorElement: <NotFound/>,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthOutlet />, // Exclusivo para autenticação
    children: [
      { path: '/', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
])

export function Router() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Helmet titleTemplate="%s | pizza.shop" />{' '}
        {/*%s = é uma variavel que muda de acordo como title que você passa nas pages*/}
        <Toaster richColors/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
