import React from "react";
import "./Cadastro.css"
import Input from "../../components/input/Input.tsx";
import Button from "../../components/button/Button.tsx";

const Cadastro = () => {
    return(
        <div className="Cadastro">
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