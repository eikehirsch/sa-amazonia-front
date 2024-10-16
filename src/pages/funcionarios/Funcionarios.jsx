import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from "../../components/navbar/Navbar"
import FuncionariosTable from "../../components/funcionariosTable/FuncionariosTable"
import "./Funcionarios.css"

function Funcionarios() {
    return (
        <div className='funcionarios-big-container'>
            <Navbar />
            <div className="funcionarios-container">
                <div className="funcionarios-header-container">
                    <h1 className="funcionarios-title">
                        Funcionários cadastrados no sistema
                    </h1>
                    <div className="add-buttons-container">
                        <Link to="/register-fiscal">
                            <button className="add-button-funcionario">
                                + Add novo fiscal
                            </button>
                        </Link>
                        <Link to="/register-biologo">
                            <button className="add-button-funcionario">
                                + Add novo biólogo
                            </button>
                        </Link>
                    </div>
                </div>
                <FuncionariosTable />
            </div>
        </div>
    )
}

export default Funcionarios