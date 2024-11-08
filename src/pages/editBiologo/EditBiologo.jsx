import "./EditBiologo.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import { useParams } from "react-router-dom";

function Register() {

    const [biologistName, setBiologistName] = useState();
    const [biologistEmail, setBiologistEmail] = useState();
    const [biologistCpf, setBiologistCpf] = useState();
    const [biologistAddress, setBiologistAddress] = useState();
    const [biologistPhone, setBiologistPhone] = useState();
    const [biologistAreaWork, setBiologistAreaWork] = useState();
    const [biologistPassword, setBiologistPassword] = useState();
    const [biologistConfirmPassword, setBiologistConfirmPassword] = useState();

    // Obtendo o parâmetro id da URL
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(null);

    const [funcionario, setFuncionario] = useState(null);

    const getFuncionario = async () => {
        setIsLoading(true);  // Inicia o carregamento
        try {
            const response = await fetch(`http://localhost:8080/usuarios/${id}`);
            const data = await response.json();
            console.log('eita', data);  // Verifique a estrutura aqui
            setFuncionario(data || []);  // Ajuste conforme necessário
        } catch (erro) {
            console.error(erro);
        } finally {
            setIsLoading(false);  // Finaliza o carregamento
        }
    };

    useEffect(() => {
        getFuncionario();
    }, []);


    return (
        <div className='edit-big-container'>
            <div className='edit-main-container'>
                <h1 className="edit-title">EDITAR BIÓLOGO</h1>
                <p className="paragraph">Preenche os campos abaixo para concluir a alteração do biólogo</p>
                <div className="inputs-container">
                    {/* <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input readOnly value={biologistName} className='input-edit' type="text" placeholder='Nome do biólogo' />
                    </div> */}
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input value={funcionario?.email} onChange={(e) => setBiologistEmail(e.target.value)} className='input-edit' type="text" placeholder='E-mail' />
                    </div>
                    {/* <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input readOnly value={biologistEmail} className='input-edit' type="text" placeholder='CPF' />
                    </div> */}
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input value={funcionario?.address} onChange={(e) => setBiologistAddress(e.target.value)} className='input-edit' type="text" placeholder='Endereço' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./username-icon.png" alt="" />
                        <input value={funcionario?.phone} onChange={(e) => setBiologistPhone(e.target.value)} className='input-edit' type="text" placeholder='Telefone de contato' />
                    </div>
                    <div className="input-container">
                        <select className="input-select-editbiologist-areaWork" id="estados" value={funcionario?.areaWork} onChange={(e) => setFiscalAreaWork(e.target.value)}>
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
                    {/* <div className="input-container">
                        <img className='edit-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setBiologistPassword(e.target.value)} className='input-edit' type="text" placeholder='Senha' />
                    </div>
                    <div className="input-container">
                        <img className='edit-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setBiologistConfirmPassword(e.target.value)} className='input-edit' type="text" placeholder='Confirmar senha' />
                    </div> */}
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