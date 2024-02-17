import React, { useEffect, useState } from "react";
import "./Edicao.css"
import InputWithChanges from "../../components/inputWithChanges/InputWithChanges.tsx";
import Button from "../../components/button/Button.tsx";
import { retrieve, replace, save } from "../../controller/localStorage.tsx"
import { USUARIOS, LOGADO } from '../../constants.tsx'

const Edicao = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [estado, setEstado] = useState("")
    const [pais, setPais] = useState("")

    const userLogado = retrieve(LOGADO)

    useEffect(() => {
        setNome(userLogado.nome)
        setEmail(userLogado.email)
        setSenha(userLogado.senha) //Talvez esse não
        setNascimento(userLogado.nascimento)
        setEstado(userLogado.estado)
        setPais(userLogado.pais)
    }, [])

    const handleAtualizarDados = (event: any) => {
        event.preventDefault();
        const dataUpdated = {
            id: userLogado.id,
            nome: event.target[0].value,
            email: event.target[1].value,
            senha: event.target[2].value,
            nascimento: event.target[3].value,
            estado: event.target[4].value,
            pais: event.target[5].value
        }
        replace(LOGADO, dataUpdated)
        const listUsers = retrieve(USUARIOS)
        listUsers.map(item => {
            if (item.id === userLogado.id) {
                item.nome = event.target[0].value
                item.email = event.target[1].value
                item.senha = event.target[2].value
                item.nascimento = event.target[3].value
                item.estado = event.target[4].value
                item.pais = event.target[5].value
            }
        })
        replace(USUARIOS, listUsers)
    }

    return (
        <div className="Edicao">
            <form onSubmit={(event) => handleAtualizarDados(event)} className="Edicao__formulario">
                <InputWithChanges label="Nome completo" type="text" value={nome} setValue={setNome} />
                <InputWithChanges label="E-mail" type="email" value={email} setValue={setEmail} />
                <InputWithChanges label="Senha" type="password" value={senha} setValue={setSenha} />
                <InputWithChanges label="Data de nascimento" type="date" value={nascimento} setValue={setNascimento} />
                <InputWithChanges label="Estado" type="text" value={estado} setValue={setEstado} />
                <InputWithChanges label="País" type="text" value={pais} setValue={setPais} />
                <div className="Edicao__button">
                    <Button title="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Edicao