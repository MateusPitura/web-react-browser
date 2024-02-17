import React from "react";
import './Login.css'
import Input from "../../components/input/Input.tsx";
import Button from "../../components/button/Button.tsx";
import { retrieve, replace } from "../../controller/localStorage.tsx"
import { USUARIOS, LOGADO } from '../../constants.tsx'
import { useNavigate } from "react-router-dom";

type LoginType = {
    email: string,
    senha: string,
}

const Login = () => {

    const navigate = useNavigate()

    const handleValidarLogin = (event: any) => {
        event.preventDefault()
        const usuarios = retrieve(USUARIOS)
        const user = {
            email: event.target[0].value,
            senha: event.target[1].value,
        }
        const userLogado = usuarios.find((item: LoginType) => (
            (item.email === user.email) && (item.senha === user.senha)
        ))
        if(userLogado){
            replace(LOGADO, userLogado)
            navigate("/browser")
        } else {
            alert("Login não encontrado")
        }
    }

    return(
        <div className="Login">
            <form onSubmit={(event)=>handleValidarLogin(event)} className="Login__formulario">
                <Input label="E-mail" type="email"/>
                <Input label="Senha" type="password"/>
                <div className="Login__button">
                    <Button title="Enviar"/>
                </div>
            </form>
        </div>
    )
}

export default Login