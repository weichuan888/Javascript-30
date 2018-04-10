const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  /* console.log(suffix); */
  // la variable suffix est utilisé pour selectionner le data-sizing quon a ecrit dans le input du html
  /* console.log(this.name); */
  // Pour verifier si on selectionne bien le nom de la variable

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  // je selectionne le document, ensuite le document element en lui accordant le style, et un setProperty a determiné!
  // --${this.name} va reprendre les noms des variables, base, blur et spacing
  // suivi this.value , ce qui lui attribue une valeur lorsquon bouge la barre
  // et on le concatenane avec + suffix afin d'ajouter les unités de px.
  // le tout va fonctionner!

  /*   console.log(this.value);
 */

  console.log(this.dataset);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

/* en creant une fonction, nous allons lire dans la console la valeur qd on deplace la barre
on ajoute une boucle pour input afin de lire les 3 inputs, et on ajoute un event à la fonction */
