import React from 'react'
import './Navbar.css'
import Icon from '../img/iconWithe.png';

const Navbar = () => {
  return (
   <div className="navbar">
  <div className="Navbar">
    <img src={Icon} alt="Logo" />
    <div className="header">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#trajetória">Trajetória</a></li>
        <li><a href="#linguagens">Linguagens</a></li>
        <li><a href="#contatos">Contatos</a></li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Navbar
