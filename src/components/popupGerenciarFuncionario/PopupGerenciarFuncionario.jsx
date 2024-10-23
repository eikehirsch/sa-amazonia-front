import React from 'react'
import "./PopupGerenciarFuncionario.css"

function PopupGerenciarFuncionario({ funcionario, togglePopup }) {
    return (
        <div className="overlay">
            <div className="popup">
                <h2 className='popup-title'>Escolha à qual denúncia o funcionário <p className='funcionario-name'>{funcionario.name}</p> será designado.</h2>
                <p>Conteúdo do popup aqui.</p>
                <button className='popup-button' onClick={togglePopup}>Fechar</button>
            </div>
        </div>
    )
}

export default PopupGerenciarFuncionario