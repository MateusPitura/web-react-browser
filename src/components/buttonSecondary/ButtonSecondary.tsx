import React from "react";
import "./ButtonSecondary.css"

type PropsType = {
    title: string,
    onClick: () => void
}

const ButtonSecondary = (props: PropsType) => {
    return (
        <label onClick={props.onClick} className="ButtonSecondary">
            <input 
                className="ButtonSecondary__input"
                type="submit"
                value={props.title}
            />
        </label>
    )
}

export default ButtonSecondary