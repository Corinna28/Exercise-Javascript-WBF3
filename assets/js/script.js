//  Sélectionne l'élément h1 par son ID
 let nomCorinna = document.getElementById("nomCorinna");

 // Définis la fonction à exécuter lorsque l'élément est cliqué
 function monEcouteur() {
   alert("Corinna Fournier");
 }

 // Ajoutez un écouteur d'événement "click" à l'élément
 nomCorinna.addEventListener("click", monEcouteur);


 