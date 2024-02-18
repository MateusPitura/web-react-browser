import React from "react";
import "./Cadastro.css"
import Input from "../../components/input/Input.tsx";
import Button from "../../components/buttonPrincipal/ButtonPrincipal.tsx";
import { save, get } from "../../controller/localStorage.tsx";
import { USER_LIST } from "../../constant.tsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
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
            toast.error('E-mail já cadastrado', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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
            toast.success('Usuário cadastrado', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => navigate("/"), 3000)
        }
    }

    return (
        <div className="Cadastro">
            <div className="Cadastro__form">
                <form onSubmit={event => handleCadastrarUsuario(event)} >
                    <Input label="Nome completo" type="text" />
                    <Input label="E-mail" type="email" />
                    <Input label="Senha" type="password" />
                    <Input label="Data de nascimento" type="date" />
                    <Input label="Estado" type="text" />
                    <Input label="País" type="text" />
                    <div className="Cadastro__button">
                        <Button title="Cadastrar" />
                    </div>
                </form>
                <div className="Cadastro__back">
                    <div onClick={() => navigate("/")} className="Cadastro__button">
                        Voltar
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cadastro