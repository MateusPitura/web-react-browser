import React, { useEffect, useState } from "react";
import { get, set } from "../../controller/localStorage.tsx";
import { GAMES } from "../../constant.tsx";
import Input from "../../components/input/Input.tsx";
import Button from "../../components/buttonPrincipal/ButtonPrincipal.tsx";

type GameType = {
    nome: string,
    categoria: string,
    url: string,
    trailer: string,
    descricao: string,
    imagem: string
}

const Descricao = () => {

    const [gameList, setGameList] = useState<GameType[]>([]);
    const [game, setGame] = useState();

    useEffect(() => {
        setGameList(get(GAMES))
    }, [])

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const gameSearched = gameList.find(item =>
            item.id.toString() == id
        )
        setGame(gameSearched)
    }, [gameList])

    const handleCadastrarComentario = (event) => {
        event.preventDefault()
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const list = get(GAMES)
        list.map(item => {
            if (item.id.toString() === id) {
                item.comentarios.push(event.target[0].value)
                item.countAvaliacoes++
                item.sumNotas+=Number(event.target[1].value)
            }
        })
        set(GAMES, list)
    }

    return (
        <div>
            <div>
                {game?.nome}
            </div>
            <div>
                {game?.categoria}
            </div>
            <div>
                {game?.url}
            </div>
            <div>
                {game?.trailer}
            </div>
            <div>
                {game?.descricao}
            </div>
            <div>
                {game?.imagem}
            </div>
            <div>
                {game?.sumNotas / game?.countAvaliacoes}
            </div>
            {
                game?.comentarios.map(item =>
                    <div>{item}</div>
                )
            }
            <form onSubmit={event => handleCadastrarComentario(event)}>
                <Input label="Comentário" type="text" />
                <Input label="Nota" type="number" />
                <div>
                    <Button title="Inserir comentário" />
                </div>
            </form>
        </div>
    )
}

export default Descricao