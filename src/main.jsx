import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Principal from './pages/Principal';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
