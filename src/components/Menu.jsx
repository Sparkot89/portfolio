import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const Menu = () => {
  return (
    <nav className='menuBar' >
        <Link duration={500} smooth={true} to="sobre-mi">Sobre mi</Link>
        <Link duration={500} smooth={true} to="skills">Mis Conocimintos</Link>
        <Link duration={500} smooth={true} to="contacto">Contacto</Link>
    </nav>
  )
}

export default Menu