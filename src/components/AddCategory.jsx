import { useState } from "react"




const AddCategory = ({onAddCategory}) => {

    const [inputChange, setinputChange] = useState('');

    const onInputChange = (e) => {
      setinputChange(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputChange.trim().length <=1 ) return

        setinputChange('')

        onAddCategory(inputChange.trim())


    }

    

  return (
<>

<div className="w-full p-10 ">
    <form onSubmit={onSubmit}>
        <input
        className=" bg-slate-300 w-full border-2 border-cyan-500 rounded-md p-2 text-2xl focus:outline-none" 
        type="text"
        placeholder="Buscar gifs"
        value={inputChange}
        onChange={onInputChange}
        />

        <input 
        className="bg-cyan-600 m-4 rounded-md px-4 text-white py-2 hover:bg-cyan-500 transition"
        type="submit"
        placeholder="Enviar" />
    </form>
</div>

   

</>
  )
}

export default AddCategory
