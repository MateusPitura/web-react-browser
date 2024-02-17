import React from "react";
import "./Button.css"

type PropsType = {
    title: string
}

const Button = (props: PropsType) => {
    return (
        <label>
            <input className="Button" type="submit" value={props.title} />
        </label>
    )
}

export default Button