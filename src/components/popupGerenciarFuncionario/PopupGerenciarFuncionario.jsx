import { useState, useEffect, React } from 'react';
import "./PopupGerenciarFuncionario.css"

import { useAuth } from "../../context/AuthContext";

function PopupGerenciarFuncionario({ funcionario, toggleGerenciarPopup }) {

    const { token } = useAuth();

    const [denuncias, setDenuncias] = useState([]);
    const [denunciasWithoutFiscal, setDenunciasWithoutFiscal] = useState([]);
    const [denunciasWithoutBiologist, setDenunciasWithoutBiologist] = useState([]);


    const getDenuncias = async () => {

        console.log('tokenzinho', token)

        try {
            const response = await fetch('http://localhost:8080/denuncias', {
                method: 'GET',  // Define o método da requisição
                headers: {
                    'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
                    'Content-Type': 'application/json'  // Define o tipo de conteúdo (opcional)
                }
            });
            const data = await response.json();
            console.log('datinha', data);  // Verifique a estrutura aqui
            setDenuncias(data || []);  // Ajuste conforme necessário
        } catch (erro) {
            console.error(erro);
        }

    }

    // Utilize um useEffect para filtrar as denúncias depois que o estado `denuncias` for atualizado
    useEffect(() => {
        const denunciasSemBiologist = denuncias.filter(denuncia => !denuncia.biologist);
        const denunciasSemFiscal = denuncias.filter(denuncia => !denuncia.fiscal);
        console.log('denunciasSemBiologist', denunciasSemBiologist);
        console.log('denunciasSemBiologist', denunciasSemFiscal);
        setDenunciasWithoutBiologist(denunciasSemBiologist);  // Atualiza o estado com as denúncias sem biologist
        setDenunciasWithoutFiscal(denunciasSemFiscal);  // Atualiza o estado com as denúncias sem biologist
    }, [denuncias]);  // Esse useEffect será chamado sempre que o estado `denuncias` mudar

    useEffect(() => {
        getDenuncias();
        console.log('funcionario', funcionario)
    }, []);

    return (
        <div className="overlay">
            <div className="popup">
                <h2 className='popup-title'>Escolha à qual denúncia o funcionário <p className='funcionario-name'>{funcionario.name}</p> será designado.</h2>
                <p>Conteúdo do popup aqui.</p>
                <ul>
                    {funcionario.tipo === 'biologo' ? (
                        denunciasWithoutBiologist.map(denuncia => (
                            <li key={denuncia.id}>{denuncia.title}</li>
                        ))
                    ) : (
                        denunciasWithoutFiscal.map(denuncia => (
                            <li key={denuncia.id}>{denuncia.title}</li>
                        ))
                    )}
                </ul>
                <button className='popup-button' onClick={toggleGerenciarPopup}>Fechar</button>
            </div>
        </div>
    )
}

export default PopupGerenciarFuncionario