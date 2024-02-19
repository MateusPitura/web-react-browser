import Welcome from './pages/welcome/Welcome.tsx'
import Cadastro from './pages/cadastro/Cadastro.tsx';
import Browser from './pages/browser/Browser.tsx';
import Edicao from './pages/edicao/Edicao.tsx';
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
        path: "/browser",
        element: <Browser/>
    },
    {
        path: "/edicao",
        element: <Edicao/>
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