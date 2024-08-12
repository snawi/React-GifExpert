



export const GetGifs = async (categorie) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=scykHOi3SNTKzV14lNRvWaqux93C7bjJ&q=${categorie}&limit=20`
    const resp = await fetch(url)
    const{ data } = await resp.json()
   

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    
    
    
    return gifs
}