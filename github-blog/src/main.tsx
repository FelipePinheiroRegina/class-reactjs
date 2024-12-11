import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { themes } from './styles/themes'
import { GlobalStyle } from './styles/global'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle/>
        <AppRoutes/>
    </ThemeProvider>
  </StrictMode>,
)
