import React from "react";
import './Game.css'
import { useNavigate } from "react-router-dom";

type propsType = {
    id: number,
    title: string,
    categoria: string,
}

const Game = (props: propsType) => {

    const navigate = useNavigate()

    return (
        <div onClick={()=>{navigate(`/descricao?id=${props.id}`)}} className="Game">
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