import React from "react";
import "./Cadastro.css"
import Input from "../../components/input/Input.tsx";
import ButtonPrincipal from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import ButtonTertiary from '../../components/buttonTertiary/ButtonTertiary.tsx'
import Title from '../../components/title/Title.tsx'
import { save, get } from "../../controller/localStorage.tsx";
import { USER_LIST } from "../../constant.tsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { toastError, toastSuccess } from '../../controller/toast.tsx'
import 'react-toastify/dist/ReactToastify.css';

type userType = {
    email: string
}

const Cadastro = () => {

    const navigate = useNavigate()

    const validarEmailDuplicado = (email: string) => {
        const userList = get(USER_LIST)
        return userList.find((item: userType) => item.email === email)
    }

    const handleCadastrarUsuario = (event: React.FormEvent) => {
        event.preventDefault()
        if (validarEmailDuplicado(event.target[1].value)) {
            toastError('E-mail já cadastrado');
        } else {
            const newUser = {
                id: new Date().getTime(),
                nome: event.target[0].value,
                email: event.target[1].value,
                senha: event.target[2].value,
                nascimento: event.target[3].value,
                estado: event.target[4].value,
                pais: event.target[5].value
            }
            save(USER_LIST, newUser)
            toastSuccess('Usuário cadastrado');
            setTimeout(() => navigate("/"), 3000)
        }
    }

    return (
        <div className="Cadastro">
            <div className="Cadastro__form">
                <Title title="Realize seu cadastro" />
                <form onSubmit={event => handleCadastrarUsuario(event)} >
                    <Input label="Nome completo" type="text" />
                    <Input label="E-mail" type="email" />
                    <Input label="Senha" type="password" />
                    <Input label="Data de nascimento" type="date" />
                    <Input label="Estado" type="text" />
                    <Input label="País" type="text" />
                    <ButtonPrincipal title="Cadastrar" />
                </form>
                <ButtonTertiary
                    title="Voltar"
                    onClick={() => navigate("/")}
                />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cadastro