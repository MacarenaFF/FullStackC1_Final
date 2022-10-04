const { Router } = require("express");
const res = require("express/lib/response");
const contacto = new Router();
const nodemailer = require("nodemailer")




// Envio de email

contacto.get("/contact", (req, res) => {
    res.render("contact")
})

contacto.post("/send-email", (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    //const asunto = req.body.asunto;
    const request = req.body.request;

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });
        // Info para construir el objeto

        let mailOptions = {
            to: "ff.macarena@gmail.com",
            from: "Remitente",
            //Subject: `${asunto}`,
            html: `<h1>Mensaje de ${name} ${lastname}: ${request}.
            Contacto: ${email}</h1>`,
        };

        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                res.status(500).send(error.message);
            }else{
                res.render('enviado');
                res.status(200).jsonp(reqbody);
            }
        });
});

module.exports = contacto;