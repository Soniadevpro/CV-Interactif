





window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200); // Décale chaque élément pour un effet en cascade
    });
  });




// Animation sur nom prenom


const texts = ["SABBAHI SONIA", "Développeuse d'Applications", "Passionnée par l'innovation"];
let index = 0; // Position du caractère actuel
let textIndex = 0; // Position du texte actuel
const speed = 100; // Vitesse de l'animation (ms)
const pause = 1000; // Temps d'attente entre les textes

function typeWriter() {
  const element = document.getElementById("typewriter");
  const text = texts[textIndex];

  if (index < text.length) {
    element.textContent += text.charAt(index);
    element.style.fontFamily = "Mogra";
    element.style.fontSize = "3em";
    element.style.textAlign = "center";
    element.style.margin = "50px";
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      index = 0;
      textIndex = (textIndex + 1) % texts.length; // Passe au texte suivant
      element.textContent = ""; // Efface l'élément avant d'écrire le prochain texte
      typeWriter();
    }, pause); // Attend avant de redémarrer
  }
}

typeWriter();









