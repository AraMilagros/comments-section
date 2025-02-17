import { StrictMode } from 'react'
import { React } from 'react';
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context/ContextComments.jsx';

import Principal from './pages/Principal';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Principal />
    </AppProvider>
  </StrictMode>,
)
