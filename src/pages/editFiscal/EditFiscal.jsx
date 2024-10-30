import { Link } from "react-router-dom"
import "./EditFiscal.css"
import { useState } from "react"

function Register() {

  const [fiscalName, setFiscalName] = useState();
  const [fiscalEmail, setFiscalEmail] = useState();
  const [fiscalCpf, setFiscalCpf] = useState();
  const [fiscalAddress, setFiscalAddress] = useState();
  const [fiscalPhone, setFiscalPhone] = useState();
  const [fiscalAreaWork, setFiscalAreaWork] = useState();
  const [fiscalPassword, setFiscalPassword] = useState();
  const [fiscalConfirmPassword, setFiscalConfirmPassword] = useState();

  function editFiscal() {
    // Vai chamar a rota do controller que cria a denúncia

    console.log("fiscalName", fiscalName)
    console.log("fiscalEmail", fiscalEmail)
    console.log("fiscalCpf", fiscalCpf)
    console.log("fiscalAddress", fiscalAddress)
    console.log("fiscalPhone", fiscalPhone)
    console.log("fiscalAreaWork", fiscalAreaWork)
    console.log("fiscalPassword", fiscalPassword)
    console.log("fiscalConfirmPassword", fiscalConfirmPassword)
  }

  return (
    <div className='edit-big-container'>
      <div className='edit-main-container'>
        <h1 className="edit-title">EDITAR FISCAL</h1>
        <p className="paragraph">Preenche os campos abaixo para concluir a alteração do fiscal</p>
        <div className="inputs-container">
          <div className="input-container">
            <img className='edit-input-icon' src="./username-icon.png" alt="" />
            <input readOnly value={fiscalName} className='input-edit' type="text" placeholder='Nome do fiscal' />
          </div>
          <div className="input-container">
            <img className='edit-input-icon' src="./username-icon.png" alt="" />
            <input value={fiscalEmail} onChange={(e) => setFiscalEmail(e.target.value)} className='input-edit' type="text" placeholder='E-mail' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input readOnly value={fiscalCpf} onChange={(e) => setFiscalCpf(e.target.value)} className='input-edit' type="text" placeholder='CPF' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input value={fiscalAddress} onChange={(e) => setFiscalAddress(e.target.value)} className='input-edit' type="text" placeholder='Endereço' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input value={fiscalPhone} onChange={(e) => setFiscalPhone(e.target.value)} className='input-edit' type="text" placeholder='Telefone de contato' />
          </div>
          <div className="input-container">
            <select value={fiscalAreaWork} className="input-select-editfiscal-areaWork" id="estados" onChange={(e) => setFiscalAreaWork(e.target.value)}>
                <option value="" disabled selected>-Selecione o estado de atuação do fiscal-</option>
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
            <img className='register-input-icon' src="./password-icon.png" alt="" />
            <input onChange={(e) => setFiscalPassword(e.target.value)} className='input-edit' type="text" placeholder='Senha' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./password-icon.png" alt="" />
            <input onChange={(e) => setFiscalConfirmPassword(e.target.value)} className='input-edit' type="text" placeholder='Confirmar senha' />
          </div>
        </div>
        <button onClick={() => editFiscal()} className="edit-fiscal-button">
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