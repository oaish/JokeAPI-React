import ToggleBtn from "./ToggleBtn";
import BoxContainer from "./micro/BoxContainer";
import {useState} from "react";

export default function Category() {
    const defObj = {Code: false, Misc: false, Dark: false, Spooky: false}
    const storedCategory = JSON.parse(localStorage.getItem('Category')) || defObj
    const [category, setCategory] = useState(storedCategory)

    function updateCategory(text, isToggled) {
         if (isToggled !== undefined) {
            const updatedCategory = {...category, [text]: isToggled};
            setCategory(updatedCategory);
            localStorage.setItem('Category', JSON.stringify(updatedCategory));
        }
    }

    return (
        <BoxContainer type="box flex">
            <ToggleBtn src="/images/code.svg" text="Code" toggled={category['Code']} update={updateCategory}/>
            <ToggleBtn src="/images/misc.svg" text="Misc" toggled={category['Misc']} update={updateCategory}/>
            <ToggleBtn src="/images/cute_skull.svg" text="Dark" toggled={category['Dark']} update={updateCategory}/>
            <ToggleBtn src="/images/jack_o'_lantern.svg" text="Spooky" toggled={category['Spooky']} update={updateCategory}/>
        </BoxContainer>
    )
}