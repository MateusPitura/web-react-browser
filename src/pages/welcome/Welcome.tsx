import React from "react";
import './Welcome.css'
import { useNavigate } from "react-router-dom";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import Input from "../../components/input/Input.tsx";
import Title from '../../components/title/Title.tsx'
import ButtonTeriary from '../../components/buttonTertiary/ButtonTertiary.tsx'
import { get, set } from "../../controller/localStorage.tsx";
import { USER_LIST, USER_LOGADO } from "../../constant.tsx";
import { ToastContainer } from 'react-toastify';
import { toastError } from '../../controller/toast.tsx'

type loginType = {
    email: string,
    senha: string,
}

const Welcome = () => {

    const navigate = useNavigate()

    const handleValidarLogin = (event: React.FormEvent) => {
        event.preventDefault()
        const emailUser = event.target[0].value
        const senhaUser = event.target[1].value
        const userList = get(USER_LIST)
        const currentUser = userList.find((item: loginType) => (
            (item.email === emailUser) && (item.senha === senhaUser)
        ))
        if (currentUser) {
            set(USER_LOGADO, currentUser)
            navigate("/home")
        } else {
            toastError('Usuário e/ou senha inválidos')
        }
    }

    return (
        <div className="Welcome">
            <div className="Welcome__form">
                <Title title="Seja bem-vindo!" />
                <form onSubmit={event => handleValidarLogin(event)}>
                    <Input label="E-mail" type="email" />
                    <Input label="Senha" type="password" />
                    <ButtonPrincipal title="Login" />
                </form>
                <ButtonSecondary onClick={() => navigate("/cadastro")} title="Criar cadastro"/>
                <ButtonTeriary
                    title="Acesso restrito"
                    onClick={() => navigate("/adm")}
                />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Welcome