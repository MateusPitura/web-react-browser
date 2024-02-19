import React from "react";
import "./ButtonTertiary.css"

type PropsType = {
    title: string,
    onClick: () => void
}

const ButtonTertiary = (props: PropsType) => {
    return (
        <div className="ButtonTertiary">
            <div onClick={props.onClick} className="ButtonTertiary__button">
                {props.title}
            </div>
        </div>
    )
}

export default ButtonTertiary