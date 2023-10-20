document.getElementById("contact").addEventListener("submit", function (event) {
    // La méthode addEventListener() de EventTarget attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.
  
    var erreurs = "";
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (!nom.value) {
        erreurs += "Veuillez renseigner un nom.";
        alert('Veuillez renseigner un nom.');
    }

    if (!email.value) {
        erreurs += "Veuillez renseigner une adresse e-mail.";
        alert('Veuillez renseigner une adresse e-mail.');
    }

    if (!message.value) {
        erreurs += "Veuillez entrer un message.";
        alert('Veuillez renseigner un message.');
    }

    if (erreurs) {
        event.preventDefault();
        // La méthode preventDefault() annule l’événement s’il est annulable, ce qui signifie que l’action par défaut qui appartient à l’événement ne se produira pas.
        document.getElementById("erreur").innerHTML = erreurs;
        return false; // Empêcher toute exécution ultérieure
    } else {
        alert('Votre message est transmis !');
        // Réinitialiser les champs du formulaire
        nom.value = "";
        email.value = "";
        message.value = "";
    }
});