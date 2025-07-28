function afficherJeu(id) {
  document.querySelectorAll(".jeu").forEach(j => j.classList.remove("visible"));
  document.getElementById(id).classList.add("visible");
}