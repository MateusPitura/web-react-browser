import React, { useEffect, useState } from "react";
import './Adm.css'
import Input from '../../components/input/Input.tsx'
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import ButtonTeriary from '../../components/buttonTertiary/ButtonTertiary.tsx'
import Title from '../../components/title/Title.tsx'
import Header from "../../components/header/Header.tsx";
import Select from "../../components/select/Select.tsx";
import TextArea from "../../components/textArea/TextArea.tsx";
import { CATEGORIA, GAME_LIST } from "../../constant.tsx";
import { get, save, set } from "../../controller/localStorage.tsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { toastSuccess } from '../../controller/toast.tsx'
import { GAME_LIST_MOCK, CATEGORIA_MOCK } from "../../mock.tsx";

const Adm = () => {

    const [categorias, setCategorias] = useState<string[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        setCategorias(get(CATEGORIA));
    }, [])

    const handleEditarCategoria = (event: any) => {
        event.preventDefault()
        const categoriaOld = event.target[0].value
        const categoriaNew = event.target[1].value
        const listCategorias: string[] = [...categorias]
        const index = listCategorias.indexOf(categoriaOld)
        listCategorias.splice(index, 1, categoriaNew)
        setCategorias(listCategorias)
        set(CATEGORIA, listCategorias)
        toastSuccess('Categoria alterada');
    }

    const handleCriarCategoria = (event: any) => {
        event.preventDefault()
        const input = event.target[0].value
        const listCategorias: string[] = [...categorias]
        listCategorias.push(input)
        setCategorias(listCategorias)
        set(CATEGORIA, listCategorias)
        toastSuccess('Categoria criada');
    }

    const handleCriarJogo = (event: any) => {
        event.preventDefault()
        const newGame = {
            id: new Date().getTime(),
            nome: event.target[0].value,
            categoria: event.target[1].value,
            link: event.target[2].value,
            trailer: event.target[3].value,
            descricao: event.target[4].value,
            imagem: event.target[5].value,
            countAvaliacoes: 0,
            sumNotasAvaliacoes: 0,
            comentarios: [],
        }
        save(GAME_LIST, newGame)
        toastSuccess('Jogo criado');
    }

    const handleCarregarMock = (event: any) => {
        event.preventDefault()
        set(GAME_LIST, GAME_LIST_MOCK)
        set(CATEGORIA, CATEGORIA_MOCK)
        toastSuccess('Mock carregado');
    }

    return (
        <div className="Adm">
            <Header>
                <ButtonTeriary
                    title="Voltar"
                    onClick={() => navigate("/login")}
                />
            </Header>
            <div className="Adm__paineis">
                <div className="Adm__form">
                    <Title title="Alterar categoria" />
                    <form onSubmit={event => handleEditarCategoria(event)} >
                        <Select option={categorias} title="Categoria" />
                        <Input label="Novo nome" type="text" />
                        <ButtonPrincipal title="Alterar" />
                    </form>
                </div>
                <div className="Adm__form">
                    <Title title="Criar categoria" />
                    <form onSubmit={event => handleCriarCategoria(event)}>
                        <Input label="Nome" type="text" />
                        <ButtonPrincipal title="Criar" />
                    </form>
                </div>
                <div className="Adm__form">
                    <Title title="Criar jogo" />
                    <form onSubmit={event => handleCriarJogo(event)}>
                        <Input label="Nome" type="text" />
                        <Select option={categorias} title="Categoria" />
                        <Input label="Link" type="url" />
                        <Input label="Trailer" type="url" />
                        <TextArea title="Descrição" />
                        <Input label="Imagem" type="url" />
                        <ButtonPrincipal title="Criar" />
                    </form>
                </div>
                <div className="Adm__form">
                    <Title title="Carregar mock" />
                    <form onSubmit={event => handleCarregarMock(event)}>
                        <ButtonPrincipal title="Carregar" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Adm