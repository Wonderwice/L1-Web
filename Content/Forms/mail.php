<?php


if (isset($_POST["message"])) {
    $message = "Ce message vous a été envoyé via la page contact du site Film du MCU
    Nom : " . $_POST["nom"] . "
    Email : " . $_POST["email"] . "
    Message : " . $_POST["message"];

    $retour = mail("styven.drui@etu.univ-poitiers.fr, alexei.czornyj@etu.univ-poitiers.fr", $_POST["sujet"],
    $message,"From: contact@filmmcu.fr" . "\r\n" . "Reply-to:" . $_POST['email']);
    if($retour) {
        echo '<p>Votre message a bien été envoyé.</p>';
    }
}

