import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import './index.css'
import { enableMSW } from './api/mocks'

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </StrictMode>
  )
})
