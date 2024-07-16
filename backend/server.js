const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // puedes usar cualquier servicio de correo como Yahoo, Outlook, etc.
  auth: {
    user: 'tu-email@gmail.com',
    pass: 'tu-contraseña'
  }
});

// Ruta para enviar correos
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'tu-email@gmail.com',
    subject: subject,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
