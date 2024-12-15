import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { themes } from './styles/themes'
import { GlobalStyle } from './styles/global'
import { UserContextProvider } from './contexts/UserContext/UserContext'
import { ReposContextProvider } from './contexts/ReposContext/ReposContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle/>
        <UserContextProvider>
          <ReposContextProvider>
            <AppRoutes/>
          </ReposContextProvider>
        </UserContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
