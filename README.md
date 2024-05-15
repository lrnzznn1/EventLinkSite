# Firebase Functions Email Sender

## Descrizione
Questo progetto contiene un server Node.js utilizzando Firebase Functions che gestisce richieste POST per inviare email tramite nodemailer. È stato sviluppato come parte del progetto dell'esame di programmazione mobile per supportare un'applicazione mobile.

## Prerequisiti
- Node.js
- Firebase CLI
- Account Firebase

## Installazione
1. Clona il repository sul tuo computer.
2. Assicurati di avere Firebase CLI installato e configurato con il tuo account Firebase.
3. Naviga nella cartella del progetto e esegui `npm install` per installare le dipendenze.

## Configurazione
1. Crea un file `.env` nella radice del progetto o nella directory `functions`.
2. Aggiungi le seguenti variabili d'ambiente nel file `.env`:
   ```
   EMAIL_USER=tuo_indirizzo_email
   EMAIL_PASS=tua_password_email
   ```
   Assicurati di sostituire `tuo_indirizzo_email` e `tua_password_email` con le credenziali del tuo account email che verranno utilizzate per inviare le email.

## Utilizzo
- Questo server Node.js è configurato per rispondere alle richieste POST inviate al suo endpoint HTTPS.
- Per inviare una email, effettua una richiesta POST all'endpoint specificato, includendo i campi `email`, `subject` e `text` nel corpo della richiesta.

## Esempio di richiesta POST
```bash
curl -X POST https://us-central1-eventlinkv2.cloudfunctions.net/handlePostRequest \
-H "Content-Type: application/json" \
-d '{
  "email": "destinatario@example.com",
  "subject": "Oggetto dell'email",
  "text": "Corpo dell'email"
}'
```

## Licenza
Questo progetto è rilasciato sotto la [Licenza MIT](LICENSE).
