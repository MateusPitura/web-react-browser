import React, { useState } from "react";
import './Welcome.css'
import { useNavigate } from "react-router-dom";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import Input from "../../components/input/Input.tsx";
import { get, set } from "../../controller/localStorage.tsx";
import { USER_LIST, USER_LOGADO } from "../../constant.tsx";

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
            setUserNotFound(true)
        }
    }

    return (
        <div className="Welcome">
            <div className="Welcome__form">
                <div className="Welcome__title">
                    Seja bem-vindo!
                </div>
                <form onSubmit={(event) => handleValidarLogin(event)}>
                    <Input label="E-mail" type="email" />
                    <Input label="Senha" type="password" />
                    {
                        userNotFound?
                        <div className="Welcome__userNotFound">
                            Usuário e/ou senha inválidos
                        </div>
                        :
                        <div>
                            
                        </div>
                    }
                    <div className="Welcome__login">
                        <ButtonPrincipal title="Login" />
                    </div>
                </form>
                <div onClick={() => navigate("/cadastro")} className="Welcome__cadastro">
                    <ButtonSecondary title="Criar cadastro" />
                </div>
                <div onClick={() => navigate("/games")} className="Welcome__adm">
                    Acesso restrito
                </div>
            </div>
        </div>
    )
}

export default Welcome