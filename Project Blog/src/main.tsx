import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import FrontPage from './pages/FrontPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    {/* <FrontPage /> */}
  </StrictMode>,
)
