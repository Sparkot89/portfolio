import React, { useState } from 'react'
import sendMail from '../communication/MailSender'

const Contact = () => {
    const send = (evt) => {
        evt.preventDefault()
        const form = new FormData(evt.target)
        const name = form.get("name")
        const mail = form.get("mail")
        const body = form.get("body")
        const data = {name, mail, body}
        sendMail(data)
    }

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [body, setBody] = useState("")

    return (
        <section id="contacto">
            <div data-aos="fade-up" className='contact'>
                <h3>Contacto</h3>
                <form className='contactForm' onSubmit={send}>
                    <span >Nombre:</span>
                    <input  name='name'  type="text" onChange={(e) => setName(e.target.value)}/>
                    <span >Email:</span>
                    <input  name='mail'  type="text" onChange={(e) => setMail(e.target.value)}/> 
                    <span>Tu mensaje:</span>
                    <textarea name='body'  rows="5" onChange={(e) => setBody(e.target.value)}/>
                    <input className='send' value="Enviar" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default Contact