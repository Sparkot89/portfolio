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
        <section>
            <div className='contact'>
                <h3 data-aos="fade-down">Contacto</h3>
                <form className='contactForm' onSubmit={send}>
                    <span data-aos="fade-left">Nombre:</span>
                    <input data-aos="fade-left" name='name'  type="text" onChange={(e) => setName(e.target.value)}/>
                    <span data-aos="fade-right">Email:</span>
                    <input data-aos="fade-right" name='mail'  type="text" onChange={(e) => setMail(e.target.value)}/> 
                    <span data-aos="fade-left">Tu mensaje:</span>
                    <textarea data-aos="fade-left" name='body'  rows="5" onChange={(e) => setBody(e.target.value)}/>
                    <input data-aos="fade-up" className='send' value="Enviar" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default Contact