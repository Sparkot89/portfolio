import axios from "axios"
const sendMail = async (form) => {
    const url = 'https://server-portfolio-qaj4.onrender.com/email'
    const data = {
        sender: {
            name: form.name,
            email: form.mail,
        },
        to: [
            {
                "email": "apriga89@gmail.com",
                "name": "Alejandro Prieto"
            }
        ],
        subject: "¡Nuevo mensaje portfolio!",
        htmlContent: form.body
    }
    const response = await axios.post(url, data)
}

export default sendMail