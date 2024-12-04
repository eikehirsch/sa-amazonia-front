import "./RegisterBiologo.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Isto aqui é para o spinner
import { Oval } from 'react-loader-spinner'

import { useAuth } from "../../context/AuthContext";

function Register() {

    const { token } = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const [biologistUsername, setFiscalUsername] = useState();
    const [biologistName, setBiologistName] = useState();
    const [biologistEmail, setBiologistEmail] = useState();
    const [biologistCpf, setBiologistCpf] = useState();
    const [biologistAddress, setBiologistAddress] = useState();
    const [biologistPhone, setBiologistPhone] = useState();
    const [biologistAreaWork, setBiologistAreaWork] = useState();
    const [biologistPassword, setBiologistPassword] = useState();
    const [biologistConfirmPassword, setBiologistConfirmPassword] = useState();

    const registerBiologist = async () => {

        setIsLoading(true); // Começa a carregar (mostrar o spinner)

        // Criando o objeto biologoData com os valores dos states
        const biologistBody = {
            username: biologistUsername,
            role: "biologo",
            name: biologistName,
            email: biologistEmail,
            cpf: biologistCpf,
            address: biologistAddress,
            phone: biologistPhone,
            areaWork: biologistAreaWork,
            password: biologistPassword,
            tipo: "BIOLOGO",
            isActive: true
        };

        console.log('biologistBody', biologistBody)

        try {
            // Fazendo a requisição para a API
            const response = await fetch('http://localhost:8080/usuarios/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(biologistBody), // Envia os dados como JSON no corpo da requisição
            });

            if (response.ok) {
                const notify = () => toast.success('Biólogo registrado com sucesso!', { position: "top-center", autoClose: 3000 });
                notify();

            } else {
                throw new Error();
            }

        } catch (erro) {
            const notify = () => toast.error('Falha ao registrar usuário! Tente mais tarde.', { position: "top-center", autoClose: 3000 });
            notify();
        }
        finally {
            setIsLoading(false); // Começa a carregar (mostrar o spinner)
        }
    }

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
                        <input onChange={(e) => setFiscalUsername(e.target.value)} className='input-register' type="text" placeholder='Username do biólogo' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setBiologistName(e.target.value)} className='input-register' type="text" placeholder='Nome do biólogo' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setBiologistEmail(e.target.value)} className='input-register' type="text" placeholder='E-mail' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setBiologistCpf(e.target.value)} className='input-register' type="text" placeholder='CPF' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setBiologistAddress(e.target.value)} className='input-register' type="text" placeholder='Endereço' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./username-icon.png" alt="" />
                        <input onChange={(e) => setBiologistPhone(e.target.value)} className='input-register' type="text" placeholder='Telefone de contato' />
                    </div>
                    <div className="input-container">
                        <select className="input-select-biologist-areaWork" id="estados" value={biologistAreaWork} onChange={(e) => setBiologistAreaWork(e.target.value)}>
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
                        <img className='register-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setBiologistPassword(e.target.value)} className='input-register' type="password" placeholder='Senha' />
                    </div>
                    <div className="input-container">
                        <img className='register-input-icon' src="./password-icon.png" alt="" />
                        <input onChange={(e) => setBiologistConfirmPassword(e.target.value)} className='input-register' type="password" placeholder='Confirmar senha' />
                    </div>
                </div>
                {isLoading && <div>
                    <Oval
                        visible={true}
                        height="50"
                        width="50"
                        color="#9181f4"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>}
                <button onClick={() => registerBiologist()} className="register-biologo-button">
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