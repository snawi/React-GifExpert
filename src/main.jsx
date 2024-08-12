import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import App from './App.jsx' */
import './index.css'
/* import CounterApp from './CounterApp' */
import GifExpertApp from './GifExpertApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
   {/*  <CounterApp
    value={20}
    /> */}

    <GifExpertApp/>
  </StrictMode>,
)
