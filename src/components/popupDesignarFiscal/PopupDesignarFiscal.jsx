import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./PopupDesignarFiscal.css"

import { useAuth } from "../../context/AuthContext";

function PopupDesignarFiscal({ fiscais, setIsPopupDesignarOpen, selectedDenuncia }) {

  console.log('fiscaisssss', fiscais)

  const { token } = useAuth();

  const designarBiologo = async (id) => {

    console.log('idzinho do fiscal', id)

    try {
      const response = await fetch(`http://localhost:8080/denuncias/${selectedDenuncia}`, {
        method: 'PATCH',  // Define o método da requisição
        headers: {
          'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
          'Content-Type': 'application/json'  // Define o tipo de conteúdo (opcional)
        },
        body: JSON.stringify({ idBiologist: null, idFiscal: id })
      });

      if (response.ok) {
        const notify = () => toast.success('Fiscal designado com sucesso!', { position: "top-center", autoClose: 3000 });
        notify();

      } else {
        throw new Error();
      }

    } catch (erro) {
      const notify = () => toast.error('Falha ao designar o fiscal.', { position: "top-center", autoClose: 3000 });
      notify();
      console.error(erro);
    }
  };

  return (
    <div className="overlay-designate-fiscal">
      <div className="popup-designate-fiscal">
        <h2>Lista de fiscais abaixo:</h2>
        <div>
          {fiscais.length > 0 && (
            fiscais.map((fiscais) => (
              <ul className='lista-fiscais'>
                <div className='fiscal-row'>
                  <li className='fiscal-name'>Nome: {fiscais.name}</li>
                  <li>ID: {fiscais.id}</li>
                  <button className='fiscal-designar-button' onClick={() => designarBiologo(fiscais.id)} >Designar fiscal</button>
                </div>
              </ul>
            ))
          )}
        </div>
        {/* <h2 className='popup-designate-title'>Você tem certeza que quer designar o biólogo <p className='funcionario-delete-name'>asdasd </p> a esta denúncia?</h2> */}
        {/* <button className='popup-designate-button'>Ativar</button> */}
        <button className='popup-designate-cancel-button-fiscal' onClick={() => setIsPopupDesignarOpen(false)}>Sair</button>
      </div>
    </div>
  )
}

export default PopupDesignarFiscal