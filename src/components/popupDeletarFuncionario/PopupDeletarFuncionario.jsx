import React from 'react'
import "./PopupDeletarFuncionario.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopupDeletarFuncionario({ funcionario, toggleDeletarPopup, setIsPopupDeletarOpen }) {

    const notify = () => toast.success("Usuário deletado com sucesso!", {position: "top-center", autoClose: 3000});

    function desativarFuncionar() {
        // Vai conectar com a rota do controller para deletar o funcionario
        setIsPopupDeletarOpen(false);
        notify();
    }

    return (
        <div className="overlay-delete">
            <div className="popup-delete">
                <h2 className='popup-delete-title'>Você tem certeza que quer desativar o funcionário <p className='funcionario-delete-name'>{funcionario.name}</p>?</h2>
                <button className='popup-delete-button' onClick={() => desativarFuncionar()}>Deletar</button>
                <button className='popup-delete-button' onClick={() => setIsPopupDeletarOpen(false)}>Cancelar</button>
                {/* <button onClick={notify}>Notify!</button> */}
            </div>
        </div>
    )
}

export default PopupDeletarFuncionario