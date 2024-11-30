import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalsStyles } from './styles/globals'

// states providers coffee
import { CartContextProvider } from './contexts/CartContext'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<GlobalsStyles/>
				<CartContextProvider>
					<CoffeeContextProvider>
						<AppRoutes/>
					</CoffeeContextProvider>
				</CartContextProvider>
		</ThemeProvider>
	</StrictMode>,
)
