import "./Login.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const {login, isAuthenticated} = useAuth();

    const [isLoading, setIsLoading] = useState();

    const [email, setEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const navigate = useNavigate();

    const logar = async () => {

        console.log('jacu chupeteira', isAuthenticated())

        const loginBody = {
            email: email,
            password: userPassword
        }

        try {

            // Fazendo a requisição para a API
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginBody), // Envia os dados como JSON no corpo da requisição
            });

            if (response.ok) {
                const notify = () => toast.success('Login realizado com sucesso!', { position: "top-center", autoClose: 3000 });
                notify();
                const responseJson = await response.json();
                console.log('asdasdasdasd', responseJson.token)
                login(responseJson.token)
                navigate("/")

            } else {
                throw new Error();
            }

        } catch (erro) {
            const notify = () => toast.error('Login não pode ser executado.', { position: "top-center", autoClose: 3000 });
            notify();
        }
        finally {
            setIsLoading(false); // Começa a carregar (mostrar o spinner)
        }
    }

    return (
        <div className='login-big-container'>
            <div className='login-main-container'>
                <h1 className="login-title">ENTRAR</h1>
                <p className="paragraph">Entre aqui com a sua conta</p>
                <div className="inputs-container">
                    <div className="input-container">
                        <img className='login-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setEmail(e.target.value)} className='input-login' type="text" placeholder='Email do usuário' />
                    </div>
                    <div className="input-container">
                        <img className='login-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setUserPassword(e.target.value)} className='input-login' type="text" placeholder='Senha' />
                    </div>
                </div>
                <button onClick={() => logar()} className="login-button">
                    Entrar
                </button>
                {/* <Link to="/register-fiscal">
                    <p className='login-register-paragraph'>Não possui conta? Clique para criar.</p>
                </Link> */}
            </div>
            <img className='login-image' src="./login-imagem.png" alt="" />
        </div>
    )
}

export default Login