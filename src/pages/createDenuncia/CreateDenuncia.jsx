import React from 'react'
import { useState } from 'react';

import "./CreateDenuncia.css"
import Navbar from "../../components/navbar/Navbar"
import CreateDenunciaDatePicker from "../../components/createDenunciaDatepicker/CreateDenunciaDatePicker"

function CreateDenuncia() {

    const [titleDenuncia, setTitleDenuncia] = useState('');
    const [typeDenuncia, setTypeDenuncia] = useState('');
    const [locationDenuncia, setLocationDenuncia] = useState('');
    const [descriptionDenuncia, setDescriptionDenuncia] = useState('');
    const [dateDenuncia, setDateDenuncia] = useState(new Date());

    function createDenuncia() {
        console.log("titleDenuncia", titleDenuncia);
        console.log("typeDenuncia", typeDenuncia);
        console.log("locationDenuncia", locationDenuncia);
        console.log("descriptionDenuncia", descriptionDenuncia);
        console.log("dateDenuncia", dateDenuncia);
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
                        <option value="queimadas">Queimadas</option>
                        <option value="contrabando">Contrabando de Animais</option>
                        <option value="garimpo">Garimpo</option>
                        <option value="desmatamento">Desmatamento</option>
                        <option value="outros">Outros</option>
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
                    <CreateDenunciaDatePicker dateDenuncia={dateDenuncia} setDateDenuncia={setDateDenuncia}/>
                </div>
                <button onClick={() => createDenuncia()} className="create-denuncia-button">
                    Registrar denúncia
                </button>
            </div>
        </div>
    )
}

export default CreateDenuncia