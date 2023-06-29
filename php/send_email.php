<?php

$name = $_POST["name"];
$email = $_POST["email"];
$topic = $_POST["topic"];
$message = $_POST["message"];
$to = "fairynaru321@gmail.com";

$header = "De: $email \r\n" .
        "X-Mailer: PHP/" . phpversion();

$final_message = "Enviado por $name \r\n\r\n" .
        "Mensaje: \r\n" .
        "$message";

mail($to, $topic, utf8_decode($final_message), $header);
echo '<script language="javascript">alert("Mensaje enviado");</script>';

?>