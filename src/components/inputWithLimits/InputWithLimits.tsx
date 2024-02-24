import React from "react";
import '../input/Input.css'

type PropsType = {
    label: string,
    type: string,
}

const InputWithLimits = (props: PropsType) => {
    return (
        <label className="Input">
            <div className="Input__label">
                {props.label}
            </div>
            <input
                className="Input__input"
                type={props.type}
                required
                min={0}
                max={5}
            />
        </label>
    )
}

export default InputWithLimits