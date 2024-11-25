import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Cartcontext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <CartProvider>
     <App />
     </CartProvider>
     </BrowserRouter>
  </StrictMode>
)
