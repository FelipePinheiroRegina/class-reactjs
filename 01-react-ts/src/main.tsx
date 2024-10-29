import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/App.js'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
