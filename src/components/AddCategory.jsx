import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSumit =(event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        //setCategories(cat => [inputValue, ...cat]);
        onNewCategory(newInputValue);        
        setInputValue('');
    }

    return (
        <form onSubmit={onSumit}>
            <input
                type="text"
                placeholder="Buscar gits"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}