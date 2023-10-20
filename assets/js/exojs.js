function compterVoyelles() {
    var mot = document.getElementById("motInput").value;
    mot = mot.toLowerCase();
    var nombreDeVoyelles = 0;

    for (var i = 0; i < mot.length; i++) {
        if ("aeiou".indexOf(mot[i]) !== -1) {
            nombreDeVoyelles++;
        }
    }

    var resultat = "Le mot '" + mot + "' contient " + nombreDeVoyelles + " voyelle(s).";
    document.getElementById("resultat").textContent = resultat;
}


// const showPopupButton = document.getElementById("showPopup");
// const closePopupButton = document.getElementById("closePopup");
// const popup = document.getElementById("popup");

// showPopupButton.addEventListener("click", () => {
//     popup.classList.remove("hidden");
// });

// closePopupButton.addEventListener("click", () => {
//     popup.classList.add("hidden");
// });