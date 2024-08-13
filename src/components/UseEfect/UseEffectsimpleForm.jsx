
 import { useEffect } from "react"
import { useState } from "react"


const UseEffectsimpleForm = () => {

    

    const[formState, setFormstate]= useState({
       name: '',
       email: ''
    })



    const handleChange = ({target}) => {
        setFormstate(target.value)
        
    }

    //effect se dispara cuando hay un cambio en el estado, primero la funcion a llamr, luego las condiciones o dependencias
    useEffect(() => {
        console.log('use efect called')
    },[formState])


    /* const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };

    const combinedObj = { obj1, ...obj2 };
    console.log(combinedObj); */

    /* const [state, setState] = useState({ 
        name: 'John',
        age: 30
    });

const updateName = () => {
    setState(({ ...state, name: 'Doe' }));
};
   
updateName() */ //mala practica da un ciclo infinito
    




  return (


  <form className="bg-slate-300 p-4 w-80 my-5 rounded-md shadow-lg">
    <h1 className="text-white  uppercase font-bold my-5">Formulario simple</h1>

    <div className="mb-2">
        <input
        className="w-full p-2 rounded focus:outline-none" 
        type="text"
        placeholder="UserName" 
        name="username"
        onChange={handleChange}/>
    </div>


    <div>
        <input
        className="w-full p-2 rounded focus:outline-none" 
        type="email"
        placeholder="wil788ramirez@hotmail.com" 
        name="email"
        onChange={handleChange}
        />
    </div>




    <div>
        <input 
        className="p-2 bg-blue-600 text-white rounded mt-2 hover:bg-blue-700 cursor-pointer"
        type="submit"
         />
    </div>

   
  {/*   {
        email === 'wilmer' && 'monta algo'
    } */}
   
  </form>





   





  )
}

export default UseEffectsimpleForm
