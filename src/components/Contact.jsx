import React, { useRef, useState } from 'react'
import sendMail from '../communication/MailSender'

const Contact = () => {
    const send = (evt) => {
        evt.preventDefault()
        const form = new FormData(evt.target)
        const name = form.get("name")
        const mail = form.get("mail")
        const body = form.get("body")
        if (!validarEmail(mail)) {
            setMailError(true)
            return;
        } else  {
            setMailError(false)
        }
        if (!body) {
            setMsgError(true)
            return;
        } else  {
            setMsgError(false)
        }
        const data = { name, mail, body }
        sendMail(data)
    }

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const mailRef = useRef(null)

    const [name, setName] = useState("")
    const [msgError, setMsgError] = useState(false)
    const [mail, setMail] = useState("")
    const [mailError, setMailError] = useState(false)
    const [body, setBody] = useState("")

    return (
        <section id="contacto">
            <div data-aos="fade-up" className='contact'>
                <h3>Contacto</h3>
                <form className='contactForm' onSubmit={send}>
                    <span >Nombre:</span>
                    <input name='name' type="text" onChange={(e) => setName(e.target.value)} />
                    <span >Email:</span>
                    <input name='mail' type="text" ref={mailRef} onChange={(e) => setMail(e.target.value)} />
                    {mailError && <div style={{ color: "red" }}>Debes introducir un email válido.</div>}
                    <span>Tu mensaje:</span>
                    <textarea name='body' rows="5" onChange={(e) => setBody(e.target.value)} />
                    {msgError && <div style={{ color: "red" }}>Debes rellenar el mensaje.</div>}
                    <input className='send' value="Enviar" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default Contact