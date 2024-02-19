import React from "react";
import "./Select.css"

type PropsType = {
    title: string,
    option: any
}

const Select = (props: PropsType) => {
    return (
        <div className="Select">
            <div className="Select__label">
                {props.title}
            </div>
            <select className="Select__select">
                {
                    props.option.map(item =>
                        <option className="Select__option">{item}</option>
                    )
                }
            </select>
        </div>
    )
}

export default Select