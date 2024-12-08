import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Theme'
import { TransactionsProvider } from './contexts/contextTransactions'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
          <TransactionsProvider>
            <Home/>
          </TransactionsProvider>
    </ThemeProvider>
  </StrictMode>,
)
