import { useState } from "react";
import { AddTag } from "./components/AddTag";
import {PicsGrid} from './components/PicsGrid'


export const SearchFlickApp = () => {

    const [tag, setTag] = useState('');
    
    const onAddTag = (newTag) => {

        setTag(newTag)
    }


    return(
        <>
            <h1>Technical Assesment - C14</h1>
            <h2>by Hugo Nogueira López</h2>
            <AddTag onNewTag={(event) => onAddTag(event)}/>
            <PicsGrid key={tag} tag={tag} />        
        </>
    )
}

