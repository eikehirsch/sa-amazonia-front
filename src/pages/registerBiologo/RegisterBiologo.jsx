import "./RegisterBiologo.css"
import { Link } from "react-router-dom"

function Register() {
    return (
        <div className='register-big-container'>
            <div className='register-main-container'>
                <div className="buttons-register-container">
                    <Link to="/register-fiscal">
                        <button className="button-register-inactive">Clique para registrar fiscal</button>
                    </Link>
                    <Link to="/register-biologo">
                        <button className="button-register-active">Registrando biólogo</button>
                    </Link>
                </div>
                <h1 className="register-title">CADASTRO DE BIÓLOGO</h1>
                <p className="paragraph">Preenche os campos abaixo para concluir o cadastro do novo biólogo</p>
                <div className="inputs-container">
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='Nome do biólogo' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='E-mail' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='CPF' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='Endereço' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='Telefone de contato' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='Área de cobertura' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./password-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='Senha' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./password-icon.png" alt="" />
                        <input className='input-register' type="text" placeholder='Confirmar senha' />
                    </div>
                </div>
                <button className="register-biologo-button">
                    CADASTRAR
                </button>
                {/* <Link to="/login">
          <p className='register-register-paragraph'>Já possui conta? Clique para entrar.</p>
        </Link> */}
            </div>
            <img className='register-image' src="./register-imagem.png" alt="" />
        </div>
    )
}

export default Register