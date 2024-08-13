import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import App from './App.jsx' */
import './index.css'
import UseEffectsimpleForm from './components/UseEfect/UseEffectsimpleForm'
/* import CounterHook from './components/UseState/CounterHook' */
/* import UseState from './components/UseState/UseState' */

/* import CounterApp from './CounterApp' */
/* import GifExpertApp from './GifExpertApp' */


createRoot(document.getElementById('root')).render(
  <>

  {/* <App/> */}
   {/*  <CounterApp
    value={20}
    /> */}
{/* 
    <GifExpertApp/> */}



<div className='container mx-auto mt-5'>
    <header className='bg-slate-100 text-center text-4xl py-5 font-semibold'>
      <h1>Hooks React</h1>
    </header>
    {/* <UseState/> */}
   {/*  <CounterHook/> */}
   <UseEffectsimpleForm/>
  </div>
  
  </>
    
    
  
)
