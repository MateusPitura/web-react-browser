import React, { useEffect, useState } from "react";
import './Games.css'
import Input from '../../components/input/Input.tsx'
import Button from '../../components/button/Button.tsx'
import { CATEGORIAS, GAMES } from '../../constants.tsx'
import { retrieve, save, replace } from "../../controller/localStorage.tsx";

const Games = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        setCategorias(retrieve(CATEGORIAS));
    }, [])

    const handleEditarCategoria = (event: any) => {
        event.preventDefault()
        const categoriaAntiga = event.target[0].value
        const categoriaNova = event.target[1].value
        const listaCategorias = retrieve(CATEGORIAS)
        const index = listaCategorias.indexOf(categoriaAntiga)
        listaCategorias.splice(index, 1, categoriaNova)
        replace(CATEGORIAS, listaCategorias)
        setCategorias(listaCategorias)
    }

    const handleCriarCategoria = (event: any) => {
        event.preventDefault()
        save(CATEGORIAS, event.target[0].value)
        setCategorias(retrieve(CATEGORIAS))
    }

    const handleCadastrarGame = (event: any) => {
        event.preventDefault()
        const newGame = {
            id: new Date().getTime(),
            nome: event.target[0].value,
            categoria: event.target[1].value,
            url: event.target[2].value,
            trailer: event.target[3].value,
            descricao: event.target[4].value,
            imagem: event.target[5].value,
        }
        save(GAMES, newGame)
    }

    return (
        <div className="Games">
            <div>
                <form onSubmit={(event) => handleEditarCategoria(event)} className="Games__formulario">
                    <select>
                        {
                            categorias.map(item =>
                                <option>{item}</option>
                            )
                        }
                    </select>
                    <Input label="Editar categoria" type="text" />
                    <div className="Games__button">
                        <Button title="Editar categoria" />
                    </div>
                </form>
            </div>
            <div>
                <form onSubmit={(event) => handleCriarCategoria(event)} className="Games__formulario">
                    <Input label="Nova categoria" type="text" />
                    <div className="Games__button">
                        <Button title="Criar nova categoria" />
                    </div>
                </form>
            </div>
            <div>
                <form onSubmit={(event) => handleCadastrarGame(event)} className="Games__formulario">
                    <Input label="Nome" type="Text" />
                    <select>
                        {
                            categorias.map(item =>
                                <option>{item}</option>
                            )
                        }
                    </select>
                    <Input label="URL" type="url" />
                    <Input label="Trailer" type="url" />
                    <textarea></textarea>
                    <Input label="Imagem" type="file" />
                    <div className="Games__button">
                        <Button title="Cadastrar novo jogo" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Games