var nouveauLien = document.createElement("a");

var tousLesParagraphes = document.getElementsByTagName('p');
var premierParagraphe = tousLesParagraphes[0];
// element lien quon veut cree et ensuite on 'lintegre dans le premierParagraphe

function basculeTexte(e){
  var tousLesParagraphes = document.getElementsByTagName('p');
  for (var i = 0; i < tousLesParagraphes.length; i++) {
    if ( i === 0) {
      continue;
    }
    tousLesParagraphes[i].style.display = "block";
  }
  if (this === nouveauLien){
      this.remove();
  }

  // this.remove() pour enlever le lien read more et evite davoir la page qui reload
  e.preventDefault();
  // console.log(e);
}
// on cree une fonction qui va etre appeller dans le addEventListener
// e => attribut d'un identifiant , qui nous permet avec la console de voir les caractéristiques de e
// e.preventDefault() permet de rendre lattribut href et # ignoré qd on clique dessus.






nouveauLien.setAttribute("href", "#");
nouveauLien.innerHTML = "Read More";

// setAttribute pour lui affecter des attributs, requiet 2 arguments: l attribut et la valeur
// innerHTML pour le remplir de texte, on affecte simplement une chaine de caracteres

nouveauLien.addEventListener("click", basculeTexte);
// addEventListener prend 2 arguments : le type d'event, et la fonction a executer lorsque l'event se produit

// nouveauLien.style.display = "inline-block";
// nouveauLien.style.marginLeft = "10px";
nouveauLien.setAttribute('class', 'more-link');
// En ajoutant un attribut class, cest comme si on avait ajouter une classe et definit
// sa valeur more-link, et ainsi on peut l'ajouter dans le css et le modifier comme bon on veut
//  vue comme div class ="more-link"
// on peut ajouter et le modifier dans le css sans passer par le html


for (var i = 0; i < tousLesParagraphes.length; i++) {
  // console.log(tousLesParagraphes[i]);
  if ( i === 0) {
    continue;
  }
  tousLesParagraphes[i].style.display = "none";
}
//  on cree une boucle for ici, pour afficher chaque paragraphe dans la console.

premierParagraphe.appendChild(nouveauLien);
// Ajouter un element enfant à un noeud
