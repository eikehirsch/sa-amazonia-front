import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./CreateDenuncia.css"
import Navbar from "../../components/navbar/Navbar"
import CreateDenunciaDatePicker from "../../components/createDenunciaDatepicker/CreateDenunciaDatePicker"

//Isto aqui é para o spinner
import { Oval } from 'react-loader-spinner'

function CreateDenuncia() {

    const [isLoading, setIsLoading] = useState(false);

    const [titleDenuncia, setTitleDenuncia] = useState('');
    const [typeDenuncia, setTypeDenuncia] = useState('');
    const [locationDenuncia, setLocationDenuncia] = useState('');
    const [descriptionDenuncia, setDescriptionDenuncia] = useState('');
    const [ufDenuncia, setUfDenuncia] = useState('SC');
    const [dateDenuncia, setDateDenuncia] = useState(new Date());

    const createDenuncia = async () => {

        setIsLoading(true); // Começa a carregar (mostrar o spinner)

        // Criando o objeto denunciaData com os valores dos states
        const denunciaBody = {
            title: titleDenuncia,
            type: typeDenuncia,
            location: locationDenuncia,
            uf: ufDenuncia,
            description: descriptionDenuncia,
            date: dateDenuncia.toISOString(),  // Caso queira enviar a data no formato ISO (ou use o formato desejado)
            biologistId: null,
            fiscalId: null
        };

        try {
            // Fazendo a requisição para a API
            const response = await fetch('http://localhost:8080/denuncias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(denunciaBody), // Envia os dados como JSON no corpo da requisição
            });

            if (response.ok) {
                const notify = () => toast.success('Denúncia criada com sucesso!', { position: "top-center", autoClose: 3000 });
                notify();

            } else {
                throw new Error();
            }

        } catch (erro) {
            const notify = () => toast.error('Falha ao criar uma denúncia! Tente mais tarde.', { position: "top-center", autoClose: 3000 });
            notify();
        }
        finally {
            setIsLoading(false); // Começa a carregar (mostrar o spinner)
        }
    }

    return (
        <div className='create-denuncia-big-container'>
            <Navbar />
            <div className="main-container">
                <h1 className="main-container-title">
                    REGISTRAR DENÚNCIA
                </h1>
                <p className="main-paragraph">
                    Fique tranquilo. Sua denúncia será realizada de forma anônima.
                </p>
            </div>
            <div className="inputs-create-denuncia-main-container">
                <div className="input-create-denuncia-container">
                    <label className='label-input-create-denuncia'>Crie um título curto para sua denúncia</label>
                    <textarea onChange={(e) => setTitleDenuncia(e.target.value)} className="input-create-denuncia" placeholder='Ex: Queimadas no bairro Pantanal dia 15/10/2024.' />
                </div>
                <div className="input-create-denuncia-container">
                    <label className='label-input-create-denuncia'>Que tipo de denúncia você está registrando?</label>
                    <select className='input-select-create-denuncia' value={typeDenuncia} onChange={(e) => setTypeDenuncia(e.target.value)}>
                        <option value="">--Selecione--</option>
                        <option value="QUEIMADAS">Queimadas</option>
                        <option value="CONTRABANDO">Contrabando de Animais</option>
                        <option value="GARIMPO">Garimpo</option>
                        <option value="DESMATAMENTO">Desmatamento</option>
                        <option value="OUTROS">Outros</option>
                    </select>
                </div>
                <div className="input-create-denuncia-container">
                    <label className='label-input-create-denuncia'>Em que local aconteceu o evento? Procure ser preciso sobre o local.</label>
                    <textarea onChange={(e) => setLocationDenuncia(e.target.value)} className="input-create-denuncia" placeholder='Ex: Praia da Joaquina, sentido norte, região de mangue, próximo ao mercado São Pedro.' />
                </div>
                <div className="input-create-denuncia-container">
                    <label className='label-input-create-denuncia'>Descreva o que você viu. Tente ser o mais específico possível nas informações relatadas.</label>
                    <textarea onChange={(e) => setDescriptionDenuncia(e.target.value)} className="input-create-denuncia" placeholder='Ex: Descrição do evento testemunhado. O que aconteceu, como aconteceu...' />
                </div>
                <div className="input-create-denuncia-container">
                    <label className='label-input-create-denuncia'>Quando aconteceu o testemunho?</label>
                    <CreateDenunciaDatePicker dateDenuncia={dateDenuncia} setDateDenuncia={setDateDenuncia} />
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
                <button onClick={() => createDenuncia()} className="create-denuncia-button">
                    Registrar denúncia
                </button>
            </div>
        </div>
    )
}

export default CreateDenuncia