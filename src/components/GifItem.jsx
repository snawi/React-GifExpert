


const GifItem = ({url, title, id}) => {



  return (

    
         <div className="p-4 w-60">
            <p className="text-2xl capitalize text-cyan-500 font-bold">{title}</p>
            <img src={ url } alt={title} />
        </div>
   
    
   
  )
}

export default GifItem
