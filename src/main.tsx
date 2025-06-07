import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/landing/landing.css'
import './styles/global.css'
import LandingPage from './pages/landing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
