import React from "react";
import './InputWithChanges.css'

type PropsType = {
    label: string,
    type: string,
    value: any,
    setValue: any,
}

const InputWithChanges = (props: PropsType) => {
    return (
        <label className="InputWithChanges">
            <div className="InputWithChanges__label">
                {props.label}
            </div>
            <input
                className="InputWithChanges__input"
                type={props.type}
                value={props.value}
                onChange={(e)=>props.setValue(e.target.value)}
                // required
            />
        </label>
    )
}

export default InputWithChanges