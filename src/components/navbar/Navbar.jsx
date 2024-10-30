import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">
        <h2>EcoVOZ</h2>
      </Link>
      <div className='navbar-subcontainer'>
        <Link to="/login">Entrar</Link>
        <Link to="/">Apoio</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Contato</Link>
        <Link to="/create-denuncia">Denunciar</Link>
      </div>
    </div>
  )
}

export default Navbar