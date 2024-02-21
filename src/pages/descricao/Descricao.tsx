import React, { useEffect, useState } from "react";
import "./Descricao.css"
import { get, set } from "../../controller/localStorage.tsx";
import { GAME_LIST, GAME_SELECT } from "../../constant.tsx";
import Input from "../../components/input/Input.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import ButtonTeriary from '../../components/buttonTertiary/ButtonTertiary.tsx'
import Title from '../../components/title/Title.tsx'
import Header from "../../components/header/Header.tsx";

type gameType = {
    id: number,
    nome: string,
    categoria: string,
    link: string,
    trailer: string,
    descricao: string,
    imagem: string,

}

const Descricao = () => {

    const [gameList, setGameList] = useState<gameType[]>([]);
    const [game, setGame] = useState<gameType>();

    useEffect(() => {
        setGameList(get(GAME_LIST))
    }, [])

    useEffect(() => {
        const id = get(GAME_SELECT)
        const gameSearched = gameList.find((item: gameType) =>
            item.id.toString() == id
        )
        setGame(gameSearched)
    }, [gameList])

    // const handleCadastrarComentario = (event) => {
    //     event.preventDefault()
    //     const list = get(GAME_LIST)
    //     list.map(item => {
    //         if (item.id.toString() === id) {
    //             item.comentarios.push(event.target[0].value)
    //             item.countAvaliacoes++
    //             item.sumNotas += Number(event.target[1].value)
    //         }
    //     })
    //     set(GAME_LIST, list)
    // }

    return (
        <div className="Descricao">
            <div className="Descricao__form">
                <Title title={game?.nome ? game?.nome : ""} />
                <div className="Descricao__categoria">
                    {game?.categoria}
                </div>
                <div className="Descricao__link">
                    Link:
                    <a target="_blank" href={game?.link}>{game?.link}</a>
                </div>
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src={game?.trailer} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    {/* {game?.trailer} */}
                </div>
                <div>
                    {game?.descricao}
                </div>
                <div>
                    {game?.imagem}
                </div>
                {/* <div>
                {game?.sumNotas / game?.countAvaliacoes}
            </div>
            {
                game?.comentarios.map(item =>
                    <div>{item}</div>
                )
            } */}
                {/* <form onSubmit={event => handleCadastrarComentario(event)}>
                <Input label="Comentário" type="text" />
                <Input label="Nota" type="number" />
                <div>
                    <Button title="Inserir comentário" />
                </div>
            </form> */}
            </div>
        </div>
    )
}

export default Descricao