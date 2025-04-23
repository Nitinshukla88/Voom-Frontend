import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserContext from './context/UserContext'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <StrictMode>
        <UserContext>
          <App />
        </UserContext>
      </StrictMode>
    </BrowserRouter>

)
