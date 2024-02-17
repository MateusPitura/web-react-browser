import React from "react";
import { Link } from "react-router-dom";

const Browser = () => {
    return (
        <div>
            <Link to="/edicao">
                <button>Editar dados pessoais</button>
            </Link>
            <Link to="/edicao">
                <button>Pesquisar</button>
            </Link>
            <Link to="/edicao">
                <button>Recomendações</button>
            </Link>
        </div>
    )
}

export default Browser