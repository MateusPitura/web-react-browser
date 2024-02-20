import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputWithChanges from "../../components/inputWithChanges/InputWithChanges.tsx";
import Game from "../../components/game/Game.tsx";
import Button from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import { get } from '../../controller/localStorage.tsx'
import { GAME, CATEGORIA } from "../../constant.tsx";
import Header from '../../components/header/Header.tsx'
import ButtonTertiary from "../../components/buttonTertiary/ButtonTertiary.tsx";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary.tsx"
import "./Home.css"
import { remove } from "../../controller/localStorage.tsx";
import { USER_LOGADO } from "../../constant.tsx";
import Select from "../../components/select/Select.tsx";

type gameType = {
    nome: string,
    categoria: string
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
        setGameList(get(GAME))
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
                    <Button title="Pesquisar" />
                </form>
            </div>
            <div className="Home__resultado">
                    {
                        gameListFiltered.map(item => (
                            <Game 
                                id={item.id} 
                                title={item.nome} 
                                categoria={item.categoria} 
                                imagem={item.imagem}
                            />
                        ))
                    }
                {/* <Link to="/edicao">
                    <button>Recomendações</button>
                </Link> */}
            </div>
        </div>
    )
}

export default Home