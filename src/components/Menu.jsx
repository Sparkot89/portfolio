import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const Menu = () => {
  return (
    <nav className='menuBar' >
        <Link spy={true} activeClass="active"  duration={500} smooth={true} to="sobre-mi">Sobre mi</Link>
        <Link spy={true} activeClass="active"  duration={500} smooth={true} to="skills">Mis Conocimintos</Link>
        <Link spy={true} activeClass="active"  duration={500} smooth={true} to="contacto">Contacto</Link>
    </nav>
  )
}

export default Menu