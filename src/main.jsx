/* import { StrictMode } from 'react' */
import { createRoot } from 'react-dom/client'
import './index.css'
/* import UseEffectsimpleForm from './components/UseEfect/UseEffectsimpleForm'  */
import MainApp from './useContext/MainApp'
/* import CounterHook from './components/UseState/CounterHook' 
import UseState from './components/UseState/UseState'  */
import { BrowserRouter } from 'react-router-dom'

/* import CounterApp from './CounterApp' */
/* import GifExpertApp from './GifExpertApp' */


createRoot(document.getElementById('root')).render(
  <>

   
   {/*  <CounterApp
    value={20}
    /> */}
 
   {/*  <GifExpertApp/> */}



<div className='container mx-auto mt-5'>
    <header className='bg-slate-100 text-center text-4xl py-5 font-semibold'>
      <h1>Hooks React</h1>
    </header>
{/*    <UseState/> 
    <CounterHook/> 
      <UseEffectsimpleForm/>  */}

    <h2 className='text-center p-5  text-4xl'>Aprendiendo React router Dom</h2>
      <BrowserRouter>
        <MainApp/>
        </BrowserRouter>
  </div>
  
  </>
    
    
  
)
