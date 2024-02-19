import React from "react";
import "./Title.css"

type propsType = {
    title: string
}

const Title = (props: propsType) => {
    return(
        <div className="Title">
            {props.title}
        </div>
    )
}

export default Title