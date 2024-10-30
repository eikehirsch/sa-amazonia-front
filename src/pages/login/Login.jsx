import "./Login.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function Login() {

    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();

    return (
        <div className='login-big-container'>
            <div className='login-main-container'>
                <h1 className="login-title">ENTRAR</h1>
                <p className="paragraph">Entre aqui com a sua conta</p>
                <div className="inputs-container">
                    <div className="input-container">
                        <img className='login-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setUserName(e.target.value)} className='input-login' type="text" placeholder='Nome do usuário' />
                    </div>
                    <div className="input-container">
                        <img className='login-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setUserPassword(e.target.value)} className='input-login' type="text" placeholder='Senha' />
                    </div>
                </div>
                <button className="login-button">
                    Entrar
                </button>
                <Link to="/register-fiscal">
                    <p className='login-register-paragraph'>Não possui conta? Clique para criar.</p>
                </Link>
            </div>
            <img className='login-image' src="./login-imagem.png" alt="" />
        </div>
    )
}

export default Login