import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputWithChanges from "../../components/inputWithChanges/InputWithChanges.tsx";
import Game from "../../components/game/Game.tsx";
import Button from "../../components/button/Button.tsx";
import { retrieve } from '../../controller/localStorage.tsx'
import { GAMES, CATEGORIAS } from '../../constants.tsx'

const Browser = () => {

    const [search, setSearch] = useState()
    const [gameList, setGameList] = useState([])
    const [gameListFiltered, setGameListFiltered] = useState([])
    const [categoriaList, setCategoriaList] = useState([])

    useEffect(() => {
        setGameList(retrieve(GAMES))
        setCategoriaList(retrieve(CATEGORIAS))
    }, [])

    const handlePesquisar = (event) => {
        event.preventDefault()
        const categoriaSelecionada = event.target[1].value
        const filteredGameList = gameList.filter(item =>
            (item.nome.toLowerCase().indexOf(search?.toLowerCase()) > -1)
            &&
            (item.categoria == categoriaSelecionada)
        )
        setGameListFiltered(filteredGameList)
    }

    return (
        <div>
            <Link to="/edicao">
                <button>Editar dados pessoais</button>
            </Link>
            <form onSubmit={(event)=>handlePesquisar(event)}>
                <InputWithChanges
                    label="Pesquisar"
                    type="search"
                    value={search}
                    setValue={setSearch}
                />
                <select>
                    {
                        categoriaList.map(item => 
                            <option>{item}</option>
                        )
                    }
                </select>
                <div className="Login__button">
                    <Button title="Enviar"/>
                </div>
            </form>
            <div>
                {
                    gameListFiltered.map(item => (
                        <Game id={item.id} title={item.nome} categoria={item.categoria} />
                    ))
                }
            </div>
            <Link to="/edicao">
                <button>Recomendações</button>
            </Link>
        </div>
    )
}

export default Browser