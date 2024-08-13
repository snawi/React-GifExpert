
//este es un custom hooks hecho por nosotros
import UseCounter from './Hooks/UseCounter'


const CounterHook = () => {

    const {counter, increment, decrement, reset} = UseCounter()
    

   




  return (
  <>

    <h2 className="text-3xl mt-3">Counter with hook: {counter}</h2>
    
    <button 
    className="p-3 block rounded bg-green-500 mt-4 text-white text-center w-20 hover:bg-green-600"
    onClick={() => increment(2)}>+1
    </button>


    <button 
    className="p-4 block rounded bg-red-500 mt-4 text-white text-center w-20 hover:bg-red-600" 
    onClick={reset}>Reset
    </button>


    <button 
    className="p-4 block rounded bg-yellow-500 mt-4 text-white text-center w-20 hover:bg-yellow-600"
    onClick={decrement}>-1
    </button>
  
  
  
  </>
  )
}

export default CounterHook
