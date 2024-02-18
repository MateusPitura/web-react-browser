import React, { useState } from "react";
import './Welcome.css'
import { useNavigate } from "react-router-dom";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import Input from "../../components/input/Input.tsx";
import { get, set } from "../../controller/localStorage.tsx";
import { USER_LIST, USER_LOGADO } from "../../constant.tsx";
import { ToastContainer, toast } from 'react-toastify';

type loginType = {
    email: string,
    senha: string,
}

const Welcome = () => {

    const navigate = useNavigate()

    const [userNotFound, setUserNotFound] = useState(false)

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
            navigate("/browser")
        } else {
            toast.error('Usuário e/ou senha inválidos', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="Welcome">
            <div className="Welcome__form">
                <div className="Welcome__title">
                    Seja bem-vindo!
                </div>
                <form onSubmit={event => handleValidarLogin(event)}>
                    <Input label="E-mail" type="email" />
                    <Input label="Senha" type="password" />
                    <div className="Welcome__login">
                        <ButtonPrincipal title="Login" />
                    </div>
                </form>
                <div onClick={() => navigate("/cadastro")} className="Welcome__cadastro">
                    <ButtonSecondary title="Criar cadastro" />
                </div>
                <div className="Welcome__adm">
                    <div onClick={() => navigate("/games")} className="Welcome__button">
                        Acesso restrito
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Welcome