let niveau = 1;

const niveaux = {
  1: {
    dechets: [
      { src: "boite.jpg", type: "jaune" },   // canette
      { src: "bar.jpg", type: "bleue" },   // journal
      { src: "https://cdn-icons-png.flaticon.com/128/590/590685.png", type: "compost" }    // pomme
    ],
    poubelles: ["jaune", "bleue", "compost"]
  },
  2: {
    dechets: [
      { src: "carton.jpg", type: "jaune" },
      { src: "papier.jpg", type: "bleue" },
      { src: "https://cdn-icons-png.flaticon.com/128/590/590685.png", type: "compost" },
      { src: "https://cdn-icons-png.flaticon.com/128/3500/3500833.png", type: "jaune" }, // bouteille
      { src: "https://cdn-icons-png.flaticon.com/128/3501/3501213.png", type: "bleue" } // papier
    ],
    poubelles: ["jaune", "bleue", "compost"]
  }
};

function chargerNiveau() {
  const zoneDechets = document.getElementById("zone-dechets");
  const zonePoubelles = document.getElementById("zone-poubelles");
  const message = document.getElementById("message");
  const titreNiveau = document.getElementById("niveau");

  zoneDechets.innerHTML = "";
  zonePoubelles.innerHTML = "";
  message.textContent = "";
  titreNiveau.innerHTML = `<h3>Niveau ${niveau}</h3>`;

  // Création des déchets à draguer
  niveaux[niveau].dechets.forEach(dechet => {
    const img = document.createElement("img");
    img.src = dechet.src;
    img.classList.add("dechet");
    img.draggable = true;
    img.dataset.type = dechet.type;

    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("type", img.dataset.type);
    });

    zoneDechets.appendChild(img);
  });

  // Création des poubelles
  niveaux[niveau].poubelles.forEach(type => {
    const div = document.createElement("div");
    div.classList.add("poubelle");
    div.dataset.type = type;

    // Affiche "Compost" au lieu de "compost", sinon majuscule simple
    div.textContent = type === "compost" ? "🟫 Compost" : `🗑️ ${type.charAt(0).toUpperCase() + type.slice(1)}`;

    div.addEventListener("dragover", e => e.preventDefault());

    div.addEventListener("drop", (e) => {
      e.preventDefault();
      const typeDrop = e.dataTransfer.getData("type");

      if (typeDrop === type) {
        message.textContent = "✅ Bien joué !";
        message.style.color = "green";

        // Supprimer le déchet draggué
        const imgs = zoneDechets.querySelectorAll("img");
        imgs.forEach(img => {
          if (img.dataset.type === typeDrop) {
            img.remove();
          }
        });
      } else {
        message.textContent = "❌ Mauvaise poubelle ! Essaie encore.";
        message.style.color = "red";
      }
    });

    zonePoubelles.appendChild(div);
  });
}

function niveauSuivant() {
  niveau++;
  if (!niveaux[niveau]) {
    alert("🎉 Bravo, tu as terminé tous les niveaux !");
    niveau = 1;
  }
  chargerNiveau();
}

function demarrerJeu() {
  document.getElementById("menu-accueil").style.display = "none";
  document.getElementById("jeu").style.display = "block";
  chargerNiveau();
}

window.onload = function () {
  // Afficher le menu au chargement, cacher le jeu
  document.getElementById("menu-accueil").style.display = "block";
  document.getElementById("jeu").style.display = "none";
};