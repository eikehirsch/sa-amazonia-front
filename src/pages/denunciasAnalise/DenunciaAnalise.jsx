import React, { useEffect } from 'react'

import Navbar from '../../components/navbar/Navbar'
import DenunciasAnaliseTable from "../../components/denunciasAnaliseTable/DenunciasAnaliseTable"

import "./DenunciaAnalise.css"

function DenunciaAnalise() {

    return (
        <div className='denuncia-analise-big-container'>
            <Navbar />
            <div className="denuncia-analise-container">
                <h1 className="denuncia-analise-title">
                    Análise de denúncias ambientais por região
                </h1>
                <DenunciasAnaliseTable />
            </div>
        </div>
    )
}

export default DenunciaAnalise