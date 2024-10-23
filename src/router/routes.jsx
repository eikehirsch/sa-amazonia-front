import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterFiscal from "../pages/registerFiscal/RegisterFiscal"
import RegisterBiologo from "../pages/registerBiologo/RegisterBiologo"
import EditFiscal from "../pages/editRegisterFiscal/EditFiscal"
import EditBiologo from "../pages/editBiologo/EditBiologo"
import CreateDenuncia from "../pages/createDenuncia/CreateDenuncia";
import Denuncias from "../pages/denuncias/Denuncias";
import Funcionarios from "../pages/funcionarios/Funcionarios";
import DenunciasAnalise from "../pages/denunciasAnalise/DenunciaAnalise"

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "/register-fiscal", element: <RegisterFiscal />},
    {path: "/register-biologo", element: <RegisterBiologo />},
    {path: "/edit-fiscal", element: <EditFiscal />},
    {path: "/edit-biologo", element: <EditBiologo />},
    {path: "/create-denuncia", element: <CreateDenuncia />},
    {path: "/denuncias", element: <Denuncias />},
    {path: "/funcionarios", element: <Funcionarios />},
    {path: "/denuncias-analise", element: <DenunciasAnalise />}
])

export default router;