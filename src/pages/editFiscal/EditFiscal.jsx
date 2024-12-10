import "./EditFiscal.css"
import { useState, useEffect } from "react"

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Isto aqui é para o spinner
import { Oval } from 'react-loader-spinner'

import { useAuth } from "../../context/AuthContext";

function Register() {

  const navigate = useNavigate();

  const { token } = useAuth();

  // Obtendo o parâmetro id da URL
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(null);

  const [funcionario, setFuncionario] = useState(null);

  const getFuncionario = async () => {
    try {
      const response = await fetch(`http://localhost:8080/usuarios/${id}`, {
        method: 'GET',  // Define o método da requisição
        headers: {
          'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
          'Content-Type': 'application/json'  // Define o tipo de conteúdo (opcional)
        }
      });
      const data = await response.json();

      console.log('data', data)
      console.log('token', token)
      console.log('id', id)

      setFuncionario(data || []);  // Ajuste conforme necessário

    } catch (erro) {
      console.error(erro);
    }
  };

  const editFiscal = async () => {

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
          'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(funcionarioBody), // Envia os dados como JSON no corpo da requisição
      });

      if (response.ok) {
        const notify = () => toast.success('Fiscal editado com sucesso!', { position: "top-center", autoClose: 3000 });
        notify();
        navigate("/funcionarios")

      } else {
        throw new Error();
      }

    } catch (erro) {
      const notify = () => toast.error('Falha ao editar um fiscal! Tente mais tarde.', { position: "top-center", autoClose: 3000 });
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
    <div className='fiscal-edit-big-container'>
      <div className='fiscal-edit-main-container'>
        <h1 className="fiscal-edit-title">EDITAR FISCAL</h1>
        <p className="fiscal-paragraph">Preencha os campos abaixo para concluir a alteração do fiscal</p>
        <div className="fiscal-inputs-container">
          <div className="fiscal-input-container">
            <input value={funcionario?.email} onChange={(e) => setFuncionario({ ...funcionario, email: e.target.value })} className='fiscal-input-edit' type="text" placeholder='E-mail' />
          </div>
          <div className="fiscal-input-container">
            <input value={funcionario?.address} onChange={(e) => setFuncionario({ ...funcionario, address: e.target.value })} className='fiscal-input-edit' type="text" placeholder='Endereço' />
          </div>
          <div className="fiscal-input-container">
            <input value={funcionario?.phone} onChange={(e) => setFuncionario({ ...funcionario, phone: e.target.value })} className='fiscal-input-edit' type="text" placeholder='Telefone de contato' />
          </div>
          <div className="fiscal-input-container">
            <select value={funcionario?.areaWork} className="fiscal-input-select-editfiscal-areaWork" id="estados" onChange={(e) => setFiscalAreaWork(e.target.value)}>
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
        <button onClick={() => editFiscal()} className="fiscal-edit-fiscal-button">
          EDITAR
        </button>
      </div>
    </div>
  )
}

export default Register