

import { useState } from "react";



const UseCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue );

    //fn que incrementa de 2 en 2
    const increment = (value) => {
        setCounter(counter + value)
    }

    const decrement = () => {
        if(counter === 0 ) return
        setCounter(counter - 1)
    }



    const reset = () => {
        setCounter(initialValue)
    }




  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export default UseCounter
