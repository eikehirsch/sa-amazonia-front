import React from 'react'
import "./PopupDeletarFuncionario.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopupDeletarFuncionario({ funcionario, toggleDeletarPopup, setIsPopupDeletarOpen, setIsFuncionarioFoiDesativado }) {

    const desativarFuncionar = async () => {
        // Vai conectar com a rota do controller para deletar o funcionario

        console.log("eitaaaaa", funcionario.id)

        try {
            const response = await fetch(`http://localhost:8080/usuarios/${funcionario.id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: false, // Envia os dados como JSON no corpo da requisição
            });

            if (response.ok) {
                const notify = () => toast.success('Usuário desativado com sucesso!', { position: "top-center", autoClose: 3000 });
                setIsFuncionarioFoiDesativado(true);
                notify();

            } else {
                throw new Error();
            }

        } catch (erro) {
            const notify = () => toast.error('Falha ao desativar usuário! Tente mais tarde.', { position: "top-center", autoClose: 3000 });
            notify();
        }

        setIsPopupDeletarOpen(false);
    }

    return (
        <div className="overlay-delete">
            <div className="popup-delete">
                <h2 className='popup-delete-title'>Você tem certeza que quer desativar o funcionário <p className='funcionario-delete-name'>{funcionario.name}</p>?</h2>
                <button className='popup-delete-button' onClick={() => desativarFuncionar()}>Desativar</button>
                <button className='popup-cancel-button' onClick={() => setIsPopupDeletarOpen(false)}>Cancelar</button>
            </div>
        </div>
    )
}

export default PopupDeletarFuncionario