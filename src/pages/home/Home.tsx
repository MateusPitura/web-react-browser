import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <Link to="/cadastro">
                <button>Novo cadastro</button>
            </Link>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/games">
                <button>Acesso restrito</button>
            </Link>
        </div>
    )
}

export default Home