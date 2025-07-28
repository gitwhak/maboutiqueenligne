function changerCouleur() {
  const couleurs = ["#f0f4f8", "#e0ffe0", "#fffbe6", "#e6f7ff"];
  const index = Math.floor(Math.random() * couleurs.length);
  document.body.style.backgroundColor = couleurs[index];
}
function demarrerJeu() {
  document.getElementById("menu-accueil").style.display = "none";
  document.getElementById("jeu").style.display = "block";
  chargerNiveau();
}window.onload = function () {
  // affiche juste le menu, pas le jeu au départ
  document.getElementById("menu-accueil").style.display = "block";
  document.getElementById("jeu").style.display = "none";
};