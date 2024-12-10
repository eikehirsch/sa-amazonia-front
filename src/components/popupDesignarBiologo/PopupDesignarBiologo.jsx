import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./PopupDesignarBiologo.css"

import { useAuth } from "../../context/AuthContext";

function PopupDesignarBiologo({ biologos, setIsPopupDesignarOpen, selectedDenuncia }) {

  console.log('biologoooooos', biologos)

  const { token } = useAuth();

  const designarBiologo = async (id) => {

    console.log('idzinho do biólogo', id)

    try {
      const response = await fetch(`http://localhost:8080/denuncias/${selectedDenuncia}`, {
        method: 'PATCH',  // Define o método da requisição
        headers: {
          'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
          'Content-Type': 'application/json'  // Define o tipo de conteúdo (opcional)
        },
        body: JSON.stringify({ idBiologist: id, idFiscal: null })
      });

      if (response.ok) {
        const notify = () => toast.success('Biólogo designado com sucesso!', { position: "top-center", autoClose: 3000 });
        notify();

      } else {
        throw new Error();
      }

    } catch (erro) {
      const notify = () => toast.error('Falha ao designar o biólogo.', { position: "top-center", autoClose: 3000 });
      notify();
      console.error(erro);
    }
  };

  return (
    <div className="overlay-designate-biologo">
      <div className="popup-designate-biologo">
        <h2>Lista de biólogos abaixo:</h2>
        <div>
          {biologos.length > 0 && (
            biologos.map((biologo) => (
              <ul className='lista-biologos'>
                <div className='biologo-row'>
                  <li className='biologo-name'>Nome: {biologo.name}</li>
                  <li>ID: {biologo.id}</li>
                  <button className='biologo-designar-button' onClick={() => designarBiologo(biologo.id)} >Designar biólogo</button>
                </div>
              </ul>
            ))
          )}
        </div>
        {/* <h2 className='popup-designate-title'>Você tem certeza que quer designar o biólogo <p className='funcionario-delete-name'>asdasd </p> a esta denúncia?</h2> */}
        {/* <button className='popup-designate-button'>Ativar</button> */}
        <button className='popup-designate-cancel-button-biologo' onClick={() => setIsPopupDesignarOpen(false)}>Sair</button>
      </div>
    </div>
  )
}

export default PopupDesignarBiologo