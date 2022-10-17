import {useFetchPics} from '../hooks/useFetchPics'
import { Pic } from "./Pic";
import './PicsGrid.css'

export const PicsGrid = ({tag}) => {
    const images = useFetchPics(tag)
    return(
        <>
            <ul>
                {images.map((image)=>{
                    return(
                        <Pic key={image.id} {...image} />
                    )
                })}
            </ul>
        </>
    )
}