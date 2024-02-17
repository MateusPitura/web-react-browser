import React from "react";
import './Login.css'
import Input from "../../components/input/Input.tsx";
import Button from "../../components/button/Button.tsx";
import { retrieve } from "../../controller/localStorage.tsx"
import { USUARIOS } from '../../contants.tsx'

const Login = () => {

    const handleValidarLogin = (event) => {
        event.preventDefault()
        const usuarios = retrieve(USUARIOS)
        const user = {
            email: event.target[0].value,
            senha: event.target[1].value,
        }
        const validado = usuarios.find(item => (
            (item.email == user.email) && (item.senha = user.senha)
        ))
        console.log(validado)
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