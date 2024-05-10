<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ora corrente</title>
</head>
<body>
    <h1>Ora corrente</h1>
    <?php
    date_default_timezone_set('Europe/Rome'); // Imposta il fuso orario desiderato
    $oraCorrente = date('H:i:s'); // Ottieni l'ora corrente nel formato HH:MM:SS
    echo "<p>L'ora corrente è: $oraCorrente</p>";
    ?>
</body>
</html>
