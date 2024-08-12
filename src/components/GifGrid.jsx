
import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs"
import GifItem from '../components/GifItem'



const GifGrid = ({categorie}) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await GetGifs(categorie)
    setImages(newImages)
  }

    useEffect(() => {
      getImages()
    },[])




  return (
    
    <div className="m-4">
        <h2 className="text-4xl uppercase font-bold">{categorie}</h2>

        <ol>
          {
            images.map((image) => (
              <GifItem
              key={image.id}
              {...image}/>
             
            ))
          }
         
        </ol>
    </div>
   
    
    
    
  )
}

export default GifGrid
