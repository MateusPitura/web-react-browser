import Login from './pages/login/Login.tsx'
import Cadastro from './pages/cadastro/Cadastro.tsx';
import Home from './pages/home/Home.tsx';
import Perfil from './pages/perfil/Perfil.tsx';
import Adm from './pages/adm/Adm.tsx';
import Descricao from './pages/descricao/Descricao.tsx';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    },
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/perfil",
        element: <Perfil/>
    },
    {
        path: '/adm',
        element: <Adm/>
    },
    {
        path: '/descricao',
        element: <Descricao/>
    }
])

export default router;