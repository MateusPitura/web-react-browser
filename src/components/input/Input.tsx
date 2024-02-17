import React from "react";
import './Input.css'

type PropsType = {
    label: string,
    type: string,
}

const Input = (props: PropsType) => {
    return (
        <label className="Input">
            <div className="Input__label">
                {props.label}
            </div>
            <input
                className="Input__input"
                type={props.type}
                // required
            />
        </label>
    )
}

export default Input