import "./EditBiologo.css"
import { useState, useEffect } from "react"

import { useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Isto aqui é para o spinner
import { Oval } from 'react-loader-spinner'

function Register() {

    // Obtendo o parâmetro id da URL
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(null);

    const [funcionario, setFuncionario] = useState(null);

    const getFuncionario = async () => {
        try {
            const response = await fetch(`http://localhost:8080/usuarios/${id}`);
            const data = await response.json();
            setFuncionario(data || []);  // Ajuste conforme necessário
        } catch (erro) {
            console.error(erro);
        }
    };

    const editBiologist = async () => {

        setIsLoading(true);

        const funcionarioBody = {
            email: funcionario.email,
            address: funcionario.address,
            phone: funcionario.phone,
            areaWork: funcionario.areaWork
        }

        try {
            const response = await fetch(`http://localhost:8080/usuarios/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(funcionarioBody), // Envia os dados como JSON no corpo da requisição
            });

            if (response.ok) {
                const notify = () => toast.success('Denúncia criada com sucesso!', { position: "top-center", autoClose: 3000 });
                notify();

            } else {
                throw new Error();
            }

        } catch (erro) {
            const notify = () => toast.error('Falha ao criar um biólogo! Tente mais tarde.', { position: "top-center", autoClose: 3000 });
            notify();
        }
        finally {
            setIsLoading(false); // Começa a carregar (mostrar o spinner)
        }
    }

    useEffect(() => {
        getFuncionario();
    }, []);


    return (
        <div className='biologo-edit-big-container'>
            <div className='biologo-edit-main-container'>
                <h1 className="biologo-edit-title">EDITAR BIÓLOGO</h1>
                <p className="biologo-edit-paragraph">Preencha os campos abaixo para concluir a alteração do biólogo</p>
                <div className="biologo-inputs-container">
                    <div className="biologo-input-container">
                        <input value={funcionario?.email} onChange={(e) => setFuncionario({ ...funcionario, email: e.target.value })} className='biologo-input-edit' type="text" placeholder='E-mail' />
                    </div>
                    <div className="biologo-input-container">
                        <input value={funcionario?.address} onChange={(e) => setFuncionario({ ...funcionario, address: e.target.value })} className='biologo-input-edit' type="text" placeholder='Endereço' />
                    </div>
                    <div className="biologo-input-container">
                        <input value={funcionario?.phone} onChange={(e) => setFuncionario({ ...funcionario, phone: e.target.value })} className='biologo-input-edit' type="text" placeholder='Telefone de contato' />
                    </div>
                    <div className="biologo-input-container">
                        <select className="biologo-input-select-editbiologist-areaWork" id="estados" value={funcionario?.areaWork} onChange={(e) => setFuncionario({ ...funcionario, areaWork: e.target.value })}>
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
                <button onClick={() => editBiologist()} className="biologo-edit-biologo-button">
                    EDITAR
                </button>
            </div>
        </div>
    )
}

export default Register