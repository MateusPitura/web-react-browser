import React from "react";
import './Game.css'

type propsType = {
    title: string,
    categoria: string,
}

const Game = (props: propsType) => {
    return (
        <div className="Game">
            <div className="Game__title">
                {props.title}
            </div>
            <div className="Game__categoria">
                {props.categoria}
            </div>
        </div>
    )
}

export default Game