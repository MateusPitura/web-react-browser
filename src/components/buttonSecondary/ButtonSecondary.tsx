import React from "react";
import "./ButtonSecondary.css"

type PropsType = {
    title: string,
}

const ButtonSecondary = (props: PropsType) => {
    return (
        <label className="ButtonSecondary">
            <input 
                className="ButtonSecondary__input"
                type="submit"
                value={props.title}
            />
        </label>
    )
}

export default ButtonSecondary