const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the transporter for sending emails (you can use any email service supported by nodemailer)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for SSL/TLS connection
  auth: {
    user: "eventlinkauth@gmail.com",
    pass: "pulmbdohgumgpxwo", 
  }
});

// Function to handle the POST request
exports.handlePostRequest = functions.https.onRequest((request, response) => {
  // Check if the request is of type POST
  if (request.method !== 'POST') {
    return response.status(400).json({ error: 'Solo richieste POST sono supportate' });
  }

  // Extract data from the POST request
  const data = request.body;

  // Check if required fields are present
  if (!data || !data.email || !data.text) {
    return response.status(400).json({ error: 'I campi email e text sono obbligatori' });
  }

  // Configure the email to be sent
  const mailOptions = {
    from: 'EventLinkAuth@gmail.com',
    to: data.email, // Recipient email address
    subject: 'Registrazione EventLink',
    text: data.text // Email body text
  };

  // Send the email
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
