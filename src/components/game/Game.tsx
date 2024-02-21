import React from "react";
import './Game.css'
import { useNavigate } from "react-router-dom";
import { GAME_SELECT } from "../../constant.tsx";
import { set } from "../../controller/localStorage.tsx";

type propsType = {
    id: number,
    title: string,
    categoria: string,
    imagem: string,
}

const Game = (props: propsType) => {

    const navigate = useNavigate()

    const handleAcessarDescricao = () => {
        set(GAME_SELECT, props.id)
        navigate("/descricao")
    }

    return (
        <div onClick={()=>handleAcessarDescricao()} className="Game">
            <div className="Game__imageContainer">
                <img className="Game__image" src={props.imagem} height={'100%'} width={'100%'}/>
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