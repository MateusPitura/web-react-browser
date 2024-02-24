import React from "react";
import '../input/Input.css'

type PropsType = {
    label: string,
    type: string,
    value: any,
    setValue: any,
}

const InputWithChanges = (props: PropsType) => {
    return (
        <label className="Input">
            <div className="Input__label">
                {props.label}
            </div>
            <input
                className="Input__input"
                type={props.type}
                value={props.value}
                onChange={(e)=>props.setValue(e.target.value)}
                required
            />
        </label>
    )
}

export default InputWithChanges