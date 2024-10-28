import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { Image } from './Image.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <Image />
  </StrictMode>,
)
