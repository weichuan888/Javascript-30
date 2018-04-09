var tableauBoucle = ["premier", "deuxieme", "troisieme", 4];

for (var i = 0; i < tableauBoucle.length; i++) {
  console.log("Boucle.");
}

var noms = ["Ed", "Ali"];
for (var i = 0; i < noms.length; i++) {
  var nom = noms[i];
  console.log("Salut " + nom + " !");
}



// boucle for/in pour parcourir les proprietes d'un objet

var objetNom = {
  "prenom": "Mat",
  "nom de famille": "Dupont"
};

for (var nom in objetNom) {
 // console.log("Boucle.");
 console.log(nom + ':' + objetNom[nom]);
}
