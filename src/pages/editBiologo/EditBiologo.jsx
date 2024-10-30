import "./EditBiologo.css"
import { Link } from "react-router-dom"
import { useState } from "react";

function Register() {

    const [biologistName, setBiologistName] = useState();
    const [biologistEmail, setBiologistEmail] = useState();
    const [biologistCpf, setBiologistCpf] = useState();
    const [biologistAddress, setBiologistAddress] = useState();
    const [biologistPhone, setBiologistPhone] = useState();
    const [biologistAreaWork, setBiologistAreaWork] = useState();
    const [biologistPassword, setBiologistPassword] = useState();
    const [biologistConfirmPassword, setBiologistConfirmPassword] = useState();

    function editBiologist() {
        // Vai chamar a rota do controller que cria a denúncia

        console.log("biologistName", biologistName)
        console.log("biologistEmail", biologistEmail)
        console.log("biologistCpf", biologistCpf)
        console.log("biologistAddress", biologistAddress)
        console.log("biologistPhone", biologistPhone)
        console.log("biologistAreaWork", biologistAreaWork)
        console.log("biologistPassword", biologistPassword)
        console.log("biologistConfirmPassword", biologistConfirmPassword)
    }

    return (
        <div className='edit-big-container'>
            <div className='edit-main-container'>
                <h1 className="edit-title">EDITAR BIÓLOGO</h1>
                <p className="paragraph">Preenche os campos abaixo para concluir a alteração do biólogo</p>
                <div className="inputs-container">
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input readOnly value={biologistName} className='input-edit' type="text" placeholder='Nome do biólogo' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input value={biologistEmail} onChange={(e) => setBiologistEmail(e.target.value)} className='input-edit' type="text" placeholder='E-mail' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input readOnly value={biologistEmail} className='input-edit' type="text" placeholder='CPF' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input value={biologistAddress} onChange={(e) => setBiologistAddress(e.target.value)} className='input-edit' type="text" placeholder='Endereço' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input value={biologistPhone} onChange={(e) => setBiologistPhone(e.target.value)} className='input-edit' type="text" placeholder='Telefone de contato' />
                    </div>
                    <div className="input-container">
                        <select className="input-select-editbiologist-areaWork" id="estados" value={biologistAreaWork} onChange={(e) => setFiscalAreaWork(e.target.value)}>
                            <option value="" disabled selected>-Selecione o estado de atuação do biólogo-</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setBiologistPassword(e.target.value)} className='input-edit' type="text" placeholder='Senha' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setBiologistConfirmPassword(e.target.value)} className='input-edit' type="text" placeholder='Confirmar senha' />
                    </div>
                </div>
                <button onClick={() => editBiologist()} className="edit-biologo-button">
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