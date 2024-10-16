import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterFiscal from "../pages/registerFiscal/RegisterFiscal"
import RegisterBiologo from "../pages/registerBiologo/RegisterBiologo"
import CreateDenuncia from "../pages/createDenuncia/CreateDenuncia";
import Denuncias from "../pages/denuncias/Denuncias";
import Funcionarios from "../pages/funcionarios/Funcionarios";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "/register-fiscal", element: <RegisterFiscal />},
    {path: "/register-biologo", element: <RegisterBiologo />},
    {path: "/create-denuncia", element: <CreateDenuncia />},
    {path: "/denuncias", element: <Denuncias />},
    {path: "/funcionarios", element: <Funcionarios />}
])

export default router;