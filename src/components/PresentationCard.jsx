import React from 'react'
import TextoAnimado from './TextoAnimado'

const PresentationCard = () => {
    return (
        <section>
            <div className="presentacion-CARD">
                <img src="./dev.jpg" className="Dev-logo" alt="dev" />
                <div className='presentacion'>
                    <h1>¡Hola!</h1>
                    <h2 className='myName'>Soy Alejandro Prieto 👋</h2>
                    <TextoAnimado text="Desarrollador Full-stack" />
                </div>
            </div>
        </section>
    )
}

export default PresentationCard