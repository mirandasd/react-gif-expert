import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategoriy = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [ ...cat, document.querySelector('#txt-category').value])
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategoriy}
            />
            { categories.map( (category ) => (
                <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}