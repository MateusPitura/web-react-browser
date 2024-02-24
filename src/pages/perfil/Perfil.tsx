import React, { useEffect, useState } from "react";
import "./Perfil.css"
import InputWithChanges from "../../components/inputWithChanges/InputWithChanges.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import ButtonTertiary from '../../components/buttonTertiary/ButtonTertiary.tsx'
import { get, set } from "../../controller/localStorage.tsx"
import { USER_LIST, USER_LOGADO } from "../../constant.tsx";
import Title from '../../components/title/Title.tsx'
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { toastSuccess } from '../../controller/toast.tsx'
import { getUserLocal } from '../../controller/userLocal.tsx'

const Perfil = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [estado, setEstado] = useState("")
    const [pais, setPais] = useState("")

    const navigate = useNavigate()
    const userLogado = getUserLocal()

    useEffect(() => {
        const userLogado = getUserLocal()
        if(!userLogado){
            navigate("/login")
        }
        
        setNome(userLogado.nome)
        setEmail(userLogado.email)
        setSenha(userLogado.senha)
        setNascimento(userLogado.nascimento)
        setEstado(userLogado.estado)
        setPais(userLogado.pais)
    }, [])

    const handleAtualizarDados = (event: any) => {
        event.preventDefault();
        const userDataUpdated = {
            id: userLogado.id,
            nome: event.target[0].value,
            email: event.target[1].value,
            senha: event.target[2].value,
            nascimento: event.target[3].value,
            estado: event.target[4].value,
            pais: event.target[5].value
        }
        set(USER_LOGADO, userDataUpdated)

        const userList = get(USER_LIST)
        userList.map(item => {
            if (item.id === userDataUpdated.id) {
                item.nome = userDataUpdated.nome
                item.email = userDataUpdated.email
                item.senha = userDataUpdated.senha
                item.nascimento = userDataUpdated.nascimento
                item.estado = userDataUpdated.estado
                item.pais = userDataUpdated.pais
            }
        })
        set(USER_LIST, userList)
        toastSuccess("Dados atualizados")
    }

    return (
        <div className="Perfil">
            <div className="Perfil__form">
                <Title title="Atualize seus dados" />
                <form onSubmit={event => handleAtualizarDados(event)}>
                    <InputWithChanges label="Nome completo" type="text" value={nome} setValue={setNome} />
                    <InputWithChanges label="E-mail" type="email" value={email} setValue={setEmail} />
                    <InputWithChanges label="Senha" type="password" value={senha} setValue={setSenha} />
                    <InputWithChanges label="Data de nascimento" type="date" value={nascimento} setValue={setNascimento} />
                    <InputWithChanges label="Estado" type="text" value={estado} setValue={setEstado} />
                    <InputWithChanges label="País" type="text" value={pais} setValue={setPais} />
                    <ButtonPrincipal title="Atualizar" />
                </form>
                <ButtonTertiary
                    title="Voltar"
                    onClick={() => navigate("/")}
                />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Perfil