import { Link } from "react-router-dom"
import "./RegisterFiscal.css"
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

  function registerFiscal() {
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
    <div className='register-big-container'>
      <div className='register-main-container'>
        <div className="buttons-register-container">
          <Link to="/register-fiscal">
            <button className="button-register-active">Registrando fiscal</button>
          </Link>
          <Link to="/register-biologo">
            <button className="button-register-inactive">Clique para registrar biólogo</button>
          </Link>
        </div>
        <h1 className="register-title">CADASTRO DE FISCAL</h1>
        <p className="paragraph">Preenche os campos abaixo para concluir o cadastro do novo fiscal</p>
        <div className="inputs-container">
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input onChange={(e) => setFiscalName(e.target.value)} className='input-register' type="text" placeholder='Nome do fiscal' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input onChange={(e) => setFiscalEmail(e.target.value)} className='input-register' type="text" placeholder='E-mail' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input onChange={(e) => setFiscalCpf(e.target.value)} className='input-register' type="text" placeholder='CPF' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input onChange={(e) => setFiscalAddress(e.target.value)} className='input-register' type="text" placeholder='Endereço' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./username-icon.png" alt="" />
            <input onChange={(e) => setFiscalPhone(e.target.value)} className='input-register' type="text" placeholder='Telefone de contato' />
          </div>
          <div className="input-container">
            <select className="input-select-fiscal-areaWork" id="estados" value={fiscalAreaWork} onChange={(e) => setFiscalAreaWork(e.target.value)}>
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
            <input onChange={(e) => setFiscalPassword(e.target.value)} className='input-register' type="password" placeholder='Senha' />
          </div>
          <div className="input-container">
            <img className='register-input-icon' src="./password-icon.png" alt="" />
            <input onChange={(e) => setFiscalConfirmPassword(e.target.value)} className='input-register' type="password" placeholder='Confirmar senha' />
          </div>
        </div>
        <button onClick={() => registerFiscal()} className="register-fiscal-button">
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