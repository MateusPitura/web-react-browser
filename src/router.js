import Welcome from './pages/welcome/Welcome.tsx'
import Cadastro from './pages/cadastro/Cadastro.tsx';
import Home from './pages/home/Home.tsx';
import Perfil from './pages/perfil/Perfil.tsx';
import Adm from './pages/adm/Adm.tsx';
import Descricao from './pages/descricao/Descricao.tsx';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    },
    {
        path: "/home",
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