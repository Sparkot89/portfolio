import axios from "axios"
const sendMail = async (form) => {
    const options = {
        method: 'POST',
        url: 'https://api.sendinblue.com/v3/smtp/email',
        data: {
            sender: {
                name: form.name,
                email: "alexlokete@gmail.com",
            },
            to: [
                {
                    "email": "apriga89@gmail.com",
                    "name": "Alejandro Prieto"
                }
            ],
            subject: "Hello world",
            htmlContent: "<p>hola</p>"
        },
        headers: {
            accept: "application/json",
            "api-key": `${process.env.REACT_APP_API_KEY_PORTFOLIO}`,
            "content-type": "application/json"
        }
    };
    debugger;
    const response = await axios.request(options)
}

export default sendMail