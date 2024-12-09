





window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200); // Décale chaque élément pour un effet en cascade
    });
  });




// Animation typeWrite sur nom prenom


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
    index++;

    // Ajuste dynamiquement la taille selon la largeur
    if (window.innerWidth < 768) {
      element.style.fontSize = "2rem"; // Pour petits écrans
    } else {
      element.style.fontSize = "3em"; // Pour écrans plus grands
    }

    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      index = 0;
      textIndex = (textIndex + 1) % texts.length; // Passe au texte suivant
      element.textContent = ""; // Réinitialise avant de recommencer
      typeWriter();
    }, pause);
  }
}

typeWriter();









//---------------------------------------------------------------------------------------------------
// gestion du formulaire de contact

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Supprimer les messages d'erreur précédents
  document.querySelectorAll('.error-message').forEach(el => el.remove());

  // Récupérer tous les champs
  const inputs = this.querySelectorAll('input, textarea');
  let isValid = true;

  // Vérifier chaque champ
  inputs.forEach(input => {
      if (input.value.trim() === '') {
          // Créer un message d'erreur
          const errorMessage = document.createElement('div');
          errorMessage.textContent = `Le champ ${input.previousElementSibling.textContent} est obligatoire`;
          errorMessage.style.color = 'red';
          errorMessage.style.backgroundColor = '#ffeeee';
          errorMessage.style.border = '1px solid red';
          errorMessage.style.padding = '10px';
          errorMessage.style.marginTop = '5px';
          errorMessage.style.borderRadius = '4px';
          errorMessage.classList.add('error-message');
          
          // Insérer le message d'erreur après le champ
          input.parentNode.insertBefore(errorMessage, input.nextSibling);
          
          // Mettre en évidence le champ
          input.style.borderColor = 'red';
          
          isValid = false;
      } else {
          input.style.borderColor = '';
      }
  });

  // Si tous les champs sont valides
  if (isValid) {
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Formulaire soumis avec succès !';
      successMessage.style.color = 'green';
      successMessage.style.backgroundColor = '#eeffee';
      successMessage.style.border = '1px solid green';
      successMessage.style.padding = '10px';
      successMessage.style.marginTop = '10px';
      successMessage.style.borderRadius = '4px';
      successMessage.style.textAlign = 'center';
      
      // Insérer le message de succès après le formulaire
      this.insertAdjacentElement('afterend', successMessage);
      
      // Réinitialiser le formulaire
      this.reset();
  }
});