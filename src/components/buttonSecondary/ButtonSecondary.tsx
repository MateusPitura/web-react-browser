import React from "react";
import "./ButtonSecondary.css"

type PropsType = {
    title: string,
}

const ButtonSecondary = (props: PropsType) => {
    return (
        <label>
            <input 
                className="ButtonSecondary"
                type="submit"
                value={props.title}
            />
        </label>
    )
}

export default ButtonSecondary