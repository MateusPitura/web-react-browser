import React from "react";
import "./ButtonPrincipal.css"

type PropsType = {
    title: string,
}

const ButtonPrincipal = (props: PropsType) => {
    return (
        <label>
            <input 
                className="ButtonPrincipal"
                type="submit"
                value={props.title}
            />
        </label>
    )
}

export default ButtonPrincipal