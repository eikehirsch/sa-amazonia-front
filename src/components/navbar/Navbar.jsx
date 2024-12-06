import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const { isAuthenticated, logout } = useAuth();

  console.log("isAuthenticated", isAuthenticated());

  return (
    <div className='navbar'>
      <Link to="/">
        <h2>EcoVOZ</h2>
      </Link>
      <div className='navbar-subcontainer'>
        {isAuthenticated() == false && (
          <Link to="/login">Entrar</Link>
        )}
        {isAuthenticated() == true && (
          <>
            <Link to="/funcionarios">Funcionários</Link>
            <Link to="/denuncias">Denúncias</Link></>
        )}
        <Link to="/">Apoio</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Contato</Link>
        <Link to="/create-denuncia">Denunciar</Link>
        {isAuthenticated() == true && (
          <Link onClick={() => logout()}>Sair</Link>
        )}

      </div>
    </div>
  )
}

export default Navbar