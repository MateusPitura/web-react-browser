import React, { useEffect, useState } from "react";
import "./Descricao.css"
import { get, set } from "../../controller/localStorage.tsx";
import { GAME_LIST, GAME_SELECT, USER_LOGADO } from "../../constant.tsx";
import InputWithLimits from "../../components/inputWithLimits/InputWithLimits.tsx";
import InputWithChanges from "../../components/inputWithChanges/InputWithChanges.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import TextArea from "../../components/textArea/TextArea.tsx";
import ButtonTeriary from '../../components/buttonTertiary/ButtonTertiary.tsx'
import Title from '../../components/title/Title.tsx'
import Header from "../../components/header/Header.tsx";
import { useNavigate } from "react-router-dom";
import { toastSuccess, toastError } from "../../controller/toast.tsx";
import { ToastContainer } from 'react-toastify';

type gameType = {
    id: number,
    nome: string,
    categoria: string,
    link: string,
    trailer: string,
    descricao: string,
    imagem: string,
    countAvaliacoes: number,
    sumNotasAvaliacoes: number,
    comentarios: {
        id: number,
        text: string
    }[]
}

const Descricao = () => {

    const [gameList, setGameList] = useState<gameType[]>([]);
    const [game, setGame] = useState<gameType>();
    const [isComentarioPreviousRegistered, setIsComentarioPreviousRegistered] = useState(false)
    const [comentario, setComentario] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        setGameList(get(GAME_LIST))
    }, [])

    useEffect(() => {
        const id = get(GAME_SELECT)
        const userLogado = get(USER_LOGADO)
        const gameSearched = gameList.find((item: gameType) =>
            item.id.toString() == id
        )
        setGame(gameSearched)
        const comentarioPreviousRegisteredTemp = gameSearched?.comentarios.find(item =>
            item.id == userLogado.id
        )
        if (comentarioPreviousRegisteredTemp) {
            setIsComentarioPreviousRegistered(true)
            setComentario(comentarioPreviousRegisteredTemp.text)
        }
    }, [gameList])

    const handleAlterarComentario = (event: React.FormEvent) => {
        event.preventDefault()
        if (!isComentarioPreviousRegistered) {
            toastError("Avalie o jogo antes")
            return
        }
        const id = get(GAME_SELECT)
        const userLogado = get(USER_LOGADO)
        const gameListUpdated = gameList.map(item => {
            if (item.id === id) {
                item.comentarios.map(item => {
                    if(item.id === userLogado.id){
                        item.text = comentario
                    }
                    return item
                })
            }
            return item
        })
        set(GAME_LIST, gameListUpdated)
        setGameList(gameListUpdated)
        toastSuccess("Comentário alterado")
    }

    const handleCadastrarComentario = (event: React.FormEvent) => {
        event.preventDefault()
        if (isComentarioPreviousRegistered) {
            toastError("Jogo já avaliado")
            return
        }
        const id = get(GAME_SELECT)
        const userLogado = get(USER_LOGADO)
        const gameListUpdated = gameList.map(item => {
            if (item.id === id) {
                const newComentario = {
                    id: userLogado.id,
                    text: event.target[0].value
                }
                item.comentarios.push(newComentario)
                item.countAvaliacoes++
                item.sumNotasAvaliacoes += Number(event.target[1].value)
            }
            return item
        })
        set(GAME_LIST, gameListUpdated)
        setGameList(gameListUpdated)
        toastSuccess("Avaliação cadastrada")
    }

    return (
        <div className="Descricao">
            <Header>
                <ButtonTeriary
                    title="Voltar"
                    onClick={() => navigate("/home")}
                />
            </Header>
            <div className="Descricao__paineis">
                <div className="Descricao__form">
                    <Title title={game?.nome ? game?.nome : ""} />
                    <div className="Descricao__descricao">
                        {game?.descricao}
                    </div>
                    <div className="Descricao__nota">
                        Nota:
                        <div>
                            {((game?.sumNotasAvaliacoes ? game?.sumNotasAvaliacoes : 1)
                                /
                                (game?.countAvaliacoes ? game?.countAvaliacoes : 1)).toFixed(2)}
                        </div>
                    </div>
                    <div className="Descricao__imagem">
                        <img className="Game__image" src={game?.imagem} height={'50%'} width={'50%'} />
                    </div>
                    <div className="Descricao__categoria">
                        {game?.categoria}
                    </div>
                    <div className="Descricao__link">
                        Link:
                        <a target="_blank" href={game?.link}>{game?.link}</a>
                    </div>
                    <div className="Descricao__link">
                        Trailer:
                        <a target="_blank" href={game?.trailer}>{game?.trailer}</a>
                    </div>
                </div>
                <div className="Descricao__form">
                    <Title title="Avalie o jogo" />
                    <form onSubmit={event => handleCadastrarComentario(event)}>
                        <TextArea title="Comentário" />
                        <InputWithLimits
                            label="Nota"
                            type="number"
                        />
                        <div>
                            <ButtonPrincipal title="Avaliar" />
                        </div>
                    </form>
                </div>
                <div className="Descricao__form">
                    <Title title="Comentários" />
                    {
                        game?.comentarios.map(item =>
                            <div
                                key={game?.comentarios.indexOf(item)}
                                className="Descricao__comentario"
                            >{item.text}
                            </div>
                        )
                    }
                </div>
                <form onSubmit={event => handleAlterarComentario(event)} className="Descricao__form">
                    <Title title="Alterar comentário" />
                    <InputWithChanges
                        label={"Comentário"}
                        type={"text"}
                        value={comentario}
                        setValue={setComentario}
                    />
                    <ButtonPrincipal title="Alterar" />
                </form>
            </div>
            <ToastContainer />
        </div >
    )
}

export default Descricao