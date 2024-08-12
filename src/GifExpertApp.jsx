
import { useState } from "react"
import {AddCategory, GifGrid} from "./components";




function GifExpertApp() {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
}


  



  return (
    <>


     <header className=" bg-cyan-600 text-white font-bold p-5 text-center text-5xl">
      <h1>Gif Expert</h1>
   </header>



   <AddCategory
   onAddCategory={(value) => onAddCategory(value)}
  
   />



   {/*  listado */}
    
      {categories.map((categorie) => (
        <GifGrid 
        key={categorie}
        categorie={categorie}
        />
      ))
      }
   





    </>
  
  )
}

export default GifExpertApp
