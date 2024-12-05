import React from 'react'
import "./PopupAtivarFuncionario.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from "../../context/AuthContext";

function PopupAtivarFuncionario({ funcionario, toggleAtivarPopup, setIsPopupAtivarOpen, setIsFuncionarioFoiAtivado }) {

    const {token} = useAuth();
    
    const ativarFuncionar = async () => {
        // Vai conectar com a rota do controller para deletar o funcionario

        console.log("eitaaaaa", funcionario.id)
        console.log("tokenzinho do popup ativar", token)

        try {
            const response = await fetch(`http://localhost:8080/usuarios/${funcionario.id}/status`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
                    'Content-Type': 'application/json',
                },
                body: true, // Envia os dados como JSON no corpo da requisição
            });

            if (response.ok) {
                const notify = () => toast.success('Usuário ativado com sucesso!', { position: "top-center", autoClose: 3000 });
                setIsFuncionarioFoiAtivado(true);
                notify();

            } else {
                throw new Error();
            }

        } catch (erro) {
            const notify = () => toast.error('Falha ao desativar usuário! Tente mais tarde.', { position: "top-center", autoClose: 3000 });
            notify();
        }

        setIsPopupAtivarOpen(false);
    }

    return (
        <div className="overlay-activate">
            <div className="popup-activate">
                <h2 className='popup-activate-title'>Você tem certeza que quer ativar o funcionário <p className='funcionario-delete-name'>{funcionario.name}</p>?</h2>
                <button className='popup-activate-button' onClick={() => ativarFuncionar()}>Ativar</button>
                <button className='popup-activate-cancel-button' onClick={() => setIsPopupAtivarOpen(false)}>Cancelar</button>
            </div>
        </div>
    )
}

export default PopupAtivarFuncionario