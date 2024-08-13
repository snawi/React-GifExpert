
import { useState } from "react"



const UseState = () => {

   const[state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  }) 

  const handleButton = () => {
    setCounter({
      ...state,
       counter1: counter1 + 1,
      })
  }

  const {counter1, counter2, counter3 } = state






  

  return (
    <div>
      <h2 className="text-center py-10 text-4xl text-blue-800 uppercase font-bold font-sans">hola UseState</h2>


      {/* <button
      className="bg-green-600 text-white rounded-sm w-20 py-2 hover:bg-green-700 transition" 
      onClick={() => setCounter( counter + 1)}>
        +1
      </button> */}

      <button
      className="bg-green-600 text-white rounded-sm w-20 py-2 hover:bg-green-700 transition" 
      onClick={handleButton}>
        +1
      </button>

      <p className="p-4 bg-blue-500 mt-4 text-white text-center">{counter1}</p>
      <p className="p-4 bg-blue-500 mt-4 text-white text-center">{counter2}</p>
      <p className="p-4 bg-blue-500 mt-4 text-white text-center">{counter3}</p>



    </div>
  )
}

export default UseState

