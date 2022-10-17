import {useState, useEffect} from 'react';
import {getTag} from '../helpers/flickrApi'

export const useFetchPics = (tag) => {
    const [images, setImage] = useState([])

    const getImages = async() => {
        const newImages = await getTag(tag);
        setImage(newImages);
    }

    useEffect(()=> {
        getImages()
    }, [])

    return images
}