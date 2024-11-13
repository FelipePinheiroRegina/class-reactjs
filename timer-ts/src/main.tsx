import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/globals'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <AppRoutes/>
        </ThemeProvider>
    </StrictMode>
)
