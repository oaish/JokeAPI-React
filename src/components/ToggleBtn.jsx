import {useEffect, useState} from "react";

export default function ToggleBtn({src, text, update, toggled}) {
    const [isToggled, setToggled] = useState(toggled)

    useEffect(() => {
        update(text, isToggled)
    }, [isToggled])

    function handleClick() {
        setToggled(toggled =>  !toggled)
    }

    return (
        <div className={"card flex" + (isToggled && " clicked")} onClick={handleClick}>
            <img src={src} className="svg" alt=""/>
            <h4 className="hh">{text}</h4>
        </div>
    )
}