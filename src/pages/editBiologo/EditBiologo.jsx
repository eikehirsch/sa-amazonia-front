import "./EditBiologo.css"
import { Link } from "react-router-dom"

function Register() {
    return (
        <div className='edit-big-container'>
            <div className='edit-main-container'>
                <h1 className="edit-title">EDITAR BIÓLOGO</h1>
                <p className="paragraph">Preenche os campos abaixo para concluir a alteração do biólogo</p>
                <div className="inputs-container">
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='Nome do biólogo' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='E-mail' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='CPF' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='Endereço' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='Telefone de contato' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='Área de cobertura' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./password-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='Senha' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./password-icon.png" alt="" />
                        <input className='input-edit' type="text" placeholder='Confirmar senha' />
                    </div>
                </div>
                <button className="edit-biologo-button">
                    EDITAR
                </button>
                {/* <Link to="/login">
          <p className='register-register-paragraph'>Já possui conta? Clique para entrar.</p>
        </Link> */}
            </div>
            <img className='edit-image' src="./register-imagem.png" alt="" />
        </div>
    )
}

export default Register