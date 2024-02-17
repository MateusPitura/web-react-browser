import React from "react";
import "./Cadastro.css"
import Input from "../../components/input/Input.tsx";
import Button from "../../components/button/Button.tsx";
import { save } from "../../controller/localStorage.tsx";
import { USUARIOS } from '../../contants.tsx'

const Cadastro = () => {

    const handleEnviarFormulario = (event) => {
        event.preventDefault()
        const newUser = {
            nome: event.target[0].value,
            email: event.target[1].value,
            senha: event.target[2].value,
            nascimento: event.target[3].value,
            estado: event.target[4].value,
            pais: event.target[5].value
        }
        save(USUARIOS, newUser)
    }

    return(
        <div onSubmit={(event)=>handleEnviarFormulario(event)} className="Cadastro">
            <form className="Cadastro__formulario">
                <Input label="Nome completo" name="nome" type="text"/>
                <Input label="E-mail" name="email" type="email"/>
                <Input label="Senha" name="senha" type="password"/>
                <Input label="Data de nascimento" name="nascimento" type="date"/>
                <Input label="Estado" name="estado" type="text"/>
                <Input label="País" name="pais" type="text"/>
                <div className="Cadastro__button"> 
                    <Button title="Enviar"/>
                </div> 
            </form>
        </div>
    )
}

export default Cadastro