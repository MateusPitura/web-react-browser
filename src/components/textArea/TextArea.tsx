import React from "react";
import "./TextArea.css"

type propsType = {
    title: string,
}

const TextArea = (props: propsType) => {
    return (
        <div className="TextArea">
            <div className="TextArea__label">
                {props.title}
            </div>
            <textarea rows={3} className="TextArea__field" required></textarea>
        </div>
    )
}

export default TextArea