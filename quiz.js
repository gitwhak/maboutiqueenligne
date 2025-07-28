const questions = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/10631/10631258.png", // canette
    question: "Où jeter cette canette en aluminium ?",
    choix: ["Poubelle jaune", "Poubelle bleue", "Compost"],
    reponse: 0
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/3501/3501213.png", // papier
    question: "Où jeter cette feuille de papier ?",
    choix: ["Poubelle bleue", "Compost", "Poubelle jaune"],
    reponse: 0
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/590/590685.png", // pomme
    question: "Où jeter cette pomme ?",
    choix: ["Compost", "Poubelle bleue", "Poubelle jaune"],
    reponse: 0
  }
];

let indexQuestion = 0;

const imageDechet = document.getElementById("image-dechet");
const choixEl = document.getElementById("choix");
const resultatEl = document.getElementById("resultat");
const suivantBtn = document.getElementById("suivant");

function afficherQuestion() {
  resultatEl.textContent = "";
  suivantBtn.style.display = "none";

  const q = questions[indexQuestion];
  imageDechet.src = q.img;
  imageDechet.alt = q.question;
  choixEl.innerHTML = "";

  q.choix.forEach((choix, i) => {
    const btn = document.createElement("button");
    btn.textContent = choix;
    btn.addEventListener("click", () => verifierReponse(i));
    choixEl.appendChild(btn);
  });
}

function verifierReponse(i) {
  const q = questions[indexQuestion];
  if (i === q.reponse) {
    resultatEl.textContent = "✅ Bonne réponse !";
    resultatEl.style.color = "green";
  } else {
    resultatEl.textContent = "❌ Mauvaise réponse.";
    resultatEl.style.color = "red";
  }
  suivantBtn.style.display = "inline-block";
}

suivantBtn.addEventListener("click", () => {
  indexQuestion++;
  if (indexQuestion >= questions.length) {
    alert("Bravo ! Tu as fini le quiz.");
    indexQuestion = 0;
  }
  afficherQuestion();
});

afficherQuestion();