const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configura il trasportatore per l'invio delle email (puoi utilizzare qualsiasi servizio di email supportato da nodemailer)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true per connessione SSL/TLS
  auth: {
    user: "eventlinkauth@gmail.com", // Inserire qui la propria email
        pass: "pulmbdohgumgpxwo", 
  }
});

// Funzione per gestire la richiesta POST
exports.handlePostRequest = functions.https.onRequest((request, response) => {
  // Verifica che la richiesta sia di tipo POST
  if (request.method !== 'POST') {
    return response.status(400).json({ error: 'Solo richieste POST sono supportate' });
  }

  // Estrai i dati dalla richiesta POST
  const data = request.body;

  // Verifica se sono presenti i campi richiesti
  if (!data || !data.email || !data.text) {
    return response.status(400).json({ error: 'I campi email e text sono obbligatori' });
  }

  // Configura l'email da inviare
  const mailOptions = {
    from: 'EventLinkAuth@gmail.com',
    to: data.email, // Indirizzo email destinatario
    subject: 'Registrazione EventLink',
    text: data.text // Testo dell'email
  };

  // Invia l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Errore durante l\'invio dell\'email:', error);
      return response.status(500).json({ error: 'Si è verificato un errore durante l\'invio dell\'email' });
    } else {
      console.log('Email inviata con successo:', info.response);
      return response.status(200).json({ message: 'Email inviata con successo' });
    }
  });
});
