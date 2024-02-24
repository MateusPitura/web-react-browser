import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWithChanges from "../../components/inputWithChanges/InputWithChanges.tsx";
import Game from "../../components/game/Game.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import { get } from '../../controller/localStorage.tsx'
import { GAME_LIST, CATEGORIA } from "../../constant.tsx";
import Header from '../../components/header/Header.tsx'
import ButtonTertiary from "../../components/buttonTertiary/ButtonTertiary.tsx";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary.tsx"
import "./Home.css"
import { remove } from "../../controller/localStorage.tsx";
import { USER_LOGADO } from "../../constant.tsx";
import Select from "../../components/select/Select.tsx";

type gameType = {
    id: number,
    nome: string,
    categoria: string,
    imagem: string,
    countAvaliacoes: number,
    sumNotasAvaliacoes: number,
    rate: number,
    comentarios: {
        id: number,
    }[]
}

const Home = () => {

    const [search, setSearch] = useState<string>()
    const [gameList, setGameList] = useState([])
    const [gameListFiltered, setGameListFiltered] = useState([])
    const [categorias, setCategorias] = useState<string[]>([])

    const navigate = useNavigate()

    const handleSair = () => {
        remove(USER_LOGADO)
        navigate("/")
    }

    useEffect(() => {
        setGameList(get(GAME_LIST))
        setCategorias(get(CATEGORIA));
    }, [])

    const handlePesquisar = (event) => {
        event.preventDefault()
        const categoriaSelecionada = event.target[1].value
        const searchLowCase = search?.toLowerCase()
        if (searchLowCase) {
            const filteredGameList = gameList.filter((item: gameType) =>
                (item.nome.toLowerCase().indexOf(searchLowCase) > -1)
                &&
                (item.categoria == categoriaSelecionada)
            )
            setGameListFiltered(filteredGameList)
        }
    }

    const handleRecomendacoes = () => {
        const userLogado = get(USER_LOGADO)
        const gameNotRateList = gameList.filter((item: gameType) => {
            const comentario = item.comentarios.find(item =>
                item.id === userLogado.id
            )
            if (!comentario) {
                return true
            }
            return false
        })
        gameNotRateList.sort((a: gameType, b: gameType) =>
            b.rate - a.rate
        )
        setGameListFiltered(gameNotRateList)
    }

    return (
        <div className="Home">
            <Header>
                <ButtonTertiary
                    title="Sair"
                    onClick={() => handleSair()}
                />
                <ButtonSecondary
                    title="Editar perfil"
                    onClick={() => navigate("/perfil")}
                />
            </Header>
            <div className="Home__paineis">
                <form onSubmit={event => handlePesquisar(event)} className="Home__pesquisa">
                    <InputWithChanges
                        label="Pesquisar"
                        type="search"
                        value={search}
                        setValue={setSearch}
                    />
                    <Select option={categorias} title="Categoria" />
                    <ButtonPrincipal title="Pesquisar" />
                    <ButtonSecondary
                        title="Recomendações"
                        onClick={handleRecomendacoes}
                    />
                </form>
            </div>
            <div className="Home__resultado">
                {
                    gameListFiltered.map((item: gameType) => (
                        <Game
                            id={item.id}
                            title={item.nome}
                            categoria={item.categoria}
                            imagem={item.imagem}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home