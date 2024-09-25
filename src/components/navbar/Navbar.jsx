import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <h2>EcoVOZ</h2>
      <div className='navbar-subcontainer'>
        <Link to="/">Entrar</Link>
        <Link to="/contato">Apoio</Link>
        <Link to="/generica">Sobre</Link>
        <Link to="/final">Contato</Link>
      </div>
    </div>
  )
}

export default Navbar