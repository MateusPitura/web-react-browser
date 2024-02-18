import React, { useEffect, useState } from "react";
import { retrieve } from "../../controller/localStorage.tsx";
import { GAMES } from "../../constants.tsx";

const Descricao = () => {

    const [gameList, setGameList] = useState([]);
    const [game, setGame] = useState();

    useEffect(() => {
        setGameList(retrieve(GAMES))
    }, [])

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const gameSearched = gameList.find(item =>
            item.id.toString() == id
        )
        setGame(gameSearched)
        console.log(gameSearched)
    }, [gameList])

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
                {game?.iamgem}
            </div>
        </div>
    )
}

export default Descricao