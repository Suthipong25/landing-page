
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // 👈 import ตัวนี้ต้องการ default export

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)