import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx';

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
    }
])

export default router;