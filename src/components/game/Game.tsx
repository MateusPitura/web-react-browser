import React from "react";
import './Game.css'
import { useNavigate } from "react-router-dom";

type propsType = {
    id: number,
    title: string,
    categoria: string,
    imagem: string,
}

const Game = (props: propsType) => {

    const navigate = useNavigate()

    const number = 400 + Number((Math.random() * 100).toFixed())

    return (
        <div onClick={()=>{navigate(`/descricao?id=${props.id}`)}} className="Game">
            <div className="Game__imageContainer">
                <img className="Game__image" src={`${props.imagem}/${number}`} height={200} width={400}/>
            </div>
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