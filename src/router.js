import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import Cadastro from './pages/cadastro/Cadastro.tsx';
import Browser from './pages/browser/Browser.tsx';
import Edicao from './pages/edicao/Edicao.tsx';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
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
])

export default router;