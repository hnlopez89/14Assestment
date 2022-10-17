import { useState } from "react";
import './AddTag.css'
export const AddTag = ({onNewTag}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value)
        return inputValue
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewTag(inputValue.trim());
        setInputValue('');
    }

    

    return(
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar fotos"
            onChange={(event)=> handleInput(event)}
            value={inputValue}
            />
        </form>
    )


}