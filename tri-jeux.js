const dechets = document.querySelectorAll(".dechet");
const poubelles = document.querySelectorAll(".poubelle");
const message = document.getElementById("message");

// Début du drag
dechets.forEach(dechet => {
  dechet.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("type", dechet.dataset.type);
    e.dataTransfer.setData("id", e.target.id);
  });
});

// Autoriser le drop
poubelles.forEach(poubelle => {
  poubelle.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  poubelle.addEventListener("drop", (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type");
    const cible = poubelle.dataset.type;

    if (type === cible) {
      message.textContent = "✅ Bien joué !";
      message.style.color = "green";
    } else {
      message.textContent = "❌ Mauvaise poubelle...";
      message.style.color = "red";
    }
  });
});