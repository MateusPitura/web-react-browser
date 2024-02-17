import React from "react";
import "./Cadastro.css"
import Input from "../../components/input/Input.tsx";
import Button from "../../components/button/Button.tsx";
import { save } from "../../controller/localStorage.tsx";
import { USUARIOS } from '../../constants.tsx'
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const navigate = useNavigate()

    const handleEnviarFormulario = (event: any) => {
        event.preventDefault()
        const newUser = {
            id: new Date().getTime(),
            nome: event.target[0].value,
            email: event.target[1].value,
            senha: event.target[2].value,
            nascimento: event.target[3].value,
            estado: event.target[4].value,
            pais: event.target[5].value
        }
        save(USUARIOS, newUser)
        alert("Usuário cadastrado")
        navigate("/")
    }

    return(
        <div className="Cadastro">
            <form onSubmit={(event)=>handleEnviarFormulario(event)} className="Cadastro__formulario">
                <Input label="Nome completo" type="text"/>
                <Input label="E-mail" type="email"/>
                <Input label="Senha" type="password"/>
                <Input label="Data de nascimento" type="date"/>
                <Input label="Estado" type="text"/>
                <Input label="País" type="text"/>
                <div className="Cadastro__button"> 
                    <Button title="Enviar"/>
                </div> 
            </form>
        </div>
    )
}

export default Cadastro