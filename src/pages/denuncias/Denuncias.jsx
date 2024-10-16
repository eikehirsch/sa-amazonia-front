import React from 'react'

import Navbar from "../../components/navbar/Navbar"
import DenunciasTable from "../../components/denunciasTable/DenunciasTable"
import "./Denuncias.css"

function Denuncias() {
  return (
    <div className='denuncias-big-container'>
        <Navbar />
        <div className="denuncias-container">
            <h1 className="denuncias-title">
                Denúncias ambientais
            </h1>
            <DenunciasTable />
        </div>
    </div>
  )
}

export default Denuncias