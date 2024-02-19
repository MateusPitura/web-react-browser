import React from "react";
import "./ButtonPrincipal.css"

type PropsType = {
    title: string,
}

const ButtonPrincipal = (props: PropsType) => {
    return (
        <label className="ButtonPrincipal">
            <input 
                className="ButtonPrincipal__input"
                type="submit"
                value={props.title}
            />
        </label>
    )
}

export default ButtonPrincipal