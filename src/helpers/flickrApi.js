export const getTag = async(tag) => {
 
    const baseUrl = `https://live.staticflickr.com`
    const defaultUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f297a7c84fadb8c4580a0ab8f46d0001&per_page=30&format=json&nojsoncallback=1`
    const searchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f297a7c84fadb8c4580a0ab8f46d0001&text=${tag}&per_page=30&format=json&nojsoncallback=1`
    
    let response;
    if(tag){
        response = await fetch(searchUrl);
    } else{
        response = await fetch(defaultUrl);
    }

    const {photos} = await response.json();
    const pics = photos.photo.map(unit=>({
        id:unit.id,
        owner:unit.owner,
        title:unit.title,
        secret: unit.secret,
        server: unit.server,
        url: `${baseUrl}/${unit.server}/${unit.id}_${unit.secret}_n.jpg`
    }))
    return pics
  } 

