// SCRIPT QUIZZ//

(function(){
  function creerquiz(){
    // variable pour la sortie HTML
    const output = [];

    // Pour chaque question...
    mesquestions.forEach(
      (questionactuelle, numeroquestion) => {

        // variable pour stocker les réponses possible
        const reponses = [];

        // et pour chaque réponse disponible
        for(letter in questionactuelle.reponses){

          // ...Ajout du boutton radio
          reponses.push(
            `<label>
              <input type="radio" name="question${numeroquestion}" value="${letter}">
              ${letter} :
              ${questionactuelle.reponses[letter]}
            </label>`
          );
        }

        // Ajout de cette question et de sa réponse
        output.push(
          `<div class="slide">
          <div class="question"> ${questionactuelle.question} </div>
          <div class="reponses"> ${reponses.join('')} </div>
          </div>`
        );
      }
    );

    // Combiner la sortie en string 
    quizcontainer.innerHTML = output.join('');
  }

  function affichresults(){

    // rassembler le container des réponses
    const reponsecontainers = quizcontainer.querySelectorAll('.reponses');

    // garder une trace des réponses
    let numCorrect = 0;

    // Pour chaque question...
    mesquestions.forEach( (questionactuelle, numeroquestion) => {

      // Trouver la réponse sélectionné
      const reponsecontainer = reponsecontainers[numeroquestion];
      const selector = `input[name=question${numeroquestion}]:checked`;
      const reponseutilisateur = (reponsecontainer.querySelector(selector) || {}).value;

      // iSi bonne réponse
      if(reponseutilisateur === questionactuelle.correctAnswer){
        // Ajouter aux bonnes réponses
        numCorrect++;

        // color la réponse en vert
        reponsecontainers[numeroquestion].style.color = 'lightgreen';
      }
      // si bonne réponse ou vide
      else{
        // color la réponse en rouge
        reponsecontainers[numeroquestion].style.color = 'red';
      }
    });

    // Afficher nombre de bonne réponse
    resultscontainer.innerHTML = `${numCorrect} bonne réponse(s) sur ${mesquestions.length}`;
  }

  function affichslide(n) {
  slides[slideactuel].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  slideactuel = n;
  if(slideactuel === 0){
    boutonprecedent.style.display = 'none';
  }
  else{
    boutonprecedent.style.display = 'inline-block';
  }
  if(slideactuel === slides.length-1){
    boutonsuivant.style.display = 'none';
    boutonsoumettre.style.display = 'inline-block';
  }
  else{
    boutonsuivant.style.display = 'inline-block';
    boutonsoumettre.style.display = 'none';
  }
}

function affichslidesuivant() {
  affichslide(slideactuel + 1);
}

function affichslideprecedent() {
  affichslide(slideactuel - 1);
}


  const quizcontainer = document.getElementById('quize');
  const resultscontainer = document.getElementById('results');
  const boutonsoumettre = document.getElementById('submit');
  const mesquestions = [
    {
      question: "Qui a réalisé la trilogie «Le Parrain» ?" ,
      reponses: {
      a: "Martin Scorsese",
      b: "Brian De Palma" ,
      c: "Francis Ford Coppola"
    },
    correctAnswer: "c"
    },
    {
      question: "Qui joue le rôle principal dans «Vol au-dessus d’un nid de coucou» ?",
      reponses: {
      a: "Jack Nicholson",
      b: "Morgan Freeman",
      c: "Michael Caine"
    },
    correctAnswer: "a"
    },
    {
      question: "En quelle année est sorti le film «Citizen Kane»?",
      reponses: {
      a: "1951",
      b: "1941",
      c: "1961",
      d: "1921"
    },
    correctAnswer: "b"
    },
    {
    question: "Quel film détient le record du plus grand nombre d’Oscars (11), aux côtés de «Ben-Hur» et de «Titanic» ?",
    reponses: {
      a: "Autant en emporte le vent",
      b: " Le Seigneur des Anneaux: Le Retour du Roi",
      c: "West Side Story"
    },
    correctAnswer: "b"
    },
    {
    question: "Qui joue le rôle principal dans «Apocalypse Now»?",
    reponses: {
      a: "Robert De Niro",
      b: " Martin Sheen",
      c: " Sean Penn",
      d: "Nicky minaj"
    },
    correctAnswer: "b"
  },
  {
    question: "Qui a composé la musique du film «Lawrence d’Arabie»?",
    reponses: {
      a: " David Newman",
      b: " Stewart Copeland",
      c: "Maurice Jarre"
    },
    correctAnswer: "c"
    },
    {
    question: "Qui a réalisé «Les Tontons flingueurs»?",
    reponses: {
      a: " Georges Lautner",
      b: " Michel Audiard",
      c: "Philippe de Broca"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel studio d’animation a réalisé «Toy Story» ?",
    reponses: {
      a: "DreamWorks",
      b: "Pixar",
      c: "Lucasfilm"
    },
    correctAnswer: "b"
    },
    {
    question: "Qui joue le rôle principal dans «Casablanca», aux côtés d’Ingrid Bergman ?",
    reponses: {
      a: " Henry Fonda",
      b: " James Stewart",
      c: " Humphrey Bogart"
    },
    correctAnswer: "c"
  },
  {
    question: "Qui a réalisé «E.T. l’extra-terrestre» ?",
    reponses: {
      a: " George Lucas",
      b: " Steven Spielberg",
      c: " Richard Donner"
    },
    correctAnswer: "b"
    },
    {
    question: "Qui joue le rôle principal dans «Le Silence des agneaux», aux côtés d’Anthony Hopkins ?",
    reponses: {
      a: " Gwyneth Paltrow",
      b: " Nicole Kidman",
      c: " Jodie Foster"
    },
    correctAnswer: "c"
  },
  {
    question: "Qui a réalisé «Le Père Noël est une ordure»?",
    reponses: {
      a: " Coline Serreau",
      b: " Jean-Marie Poiré",
      c: " Gérard Oury"
    },
    correctAnswer: "b"
    },
    {
    question: "Lequel de ces films n’a pas été réalisé par Alfred Hitchcock ?",
    reponses: {
      a: " Rendez-vous avec la mort",
      b: " Fenêtre sur cour",
      c: " La Mort aux trousses"
    },
    correctAnswer: "a"
  },
  {
    question: "Qui joue le rôle principal dans «Un Américain à Paris»?",
    reponses: {
      a: " Gene Kelly",
      b: " Fred Astaire",
      c: " William Forsythe"
    },
    correctAnswer: "a"
    },
    {
    question: "Qui a réalisé «Le Pont de la rivière Kwaï»?",
    reponses: {
      a: " Elia Kazan",
      b: " David Lean",
      c: " Fred Zinnemann"
    },
    correctAnswer: "b"
  },
  {
    question: "Combien y a-t-il de pays en Afrique?",
    reponses: {
      a: "54",
      b: "68",
      c: "81",
      d: "33"
    },
    correctAnswer: "a"
    },
    {
    question: "Quelle est la religion dominante en Afrique ?",
    reponses: {
      a: "L'islam",
      b: "Le christianisme",
      c: "Les religions tribales africaines",
      d: "Le vaudou"
    },
    correctAnswer: "a"
  },
  {
    question: "Dans quel pays se situe le Kilimandjaro?",
    reponses: {
      a: "Botswana",
      b: "Namibie",
      c: "Tanzanie",
      d: "Ethiopie"
    },
    correctAnswer: "c"
    },
    {
    question: "A quel pays sont rattachées les îles Canaries?",
    reponses: {
      a: "Espagne",
      b: "Royaume-Uni",
      c: "Aucun, ces îles forment un état indépendant"
    },
    correctAnswer: "a"
  },
  {
    question: "Quelle est la capitale de l'Ethiopie?",
    reponses: {
      a: "Nairobi",
      b: "Addis-Abeba",
      c: "Kigali"
    },
    correctAnswer: "b"
    },
    {
    question: "Quel est le classement du continent africain par rapport aux autres continents, en terme de population ?",
    reponses: {
      a: "1er",
      b: "2ème",
      c: "3ème"
    },
    correctAnswer: "b"
  },
  {
    question: "Dans quel pays se situe le cap de Bonne-Espérance ?",
    reponses: {
      a: " Cap-Vert",
      b: " Côte d’Ivoire",
      c: " Afrique du Sud"
    },
    correctAnswer: "c"
    },
    {
    question: "Quelle est la langue officielle du Sénégal ?",
    reponses: {
      a: " Le sénégalais",
      b: "L’anglais",
      c: " Le français"
    },
    correctAnswer: "c"
  },
  {
    question: "À quel pays sont rattachées les Seychelles ?",
    reponses: {
      a: "Espagne",
      b: " Royaume-Uni",
      c: " Aucun, ces îles forment un état indépendant"
    },
    correctAnswer: "c"
    },
    {
    question: "Dans quels pays se situent les chutes Victoria ?",
    reponses: {
      a: "Kenya et Tanzanie",
      b: " Mozambique et Malawi",
      c: "  Zambie et Zimbabwe"
    },
    correctAnswer: "c"
  },
  {
    question: "Quel est le point culminant de l’Afrique ?",
    reponses: {
      a: " Le Kilimandjaro",
      b: "  Le mont Méru",
      c: "  Le mont Kenya"
    },
    correctAnswer: "a"
    }
  ];

  // Coup d'envoi
  creerquiz();

  // Pagination
  const boutonprecedent = document.getElementById("previous");
  const boutonsuivant = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let slideactuel = 0;

  // Afficher le premier slide
  affichslide(slideactuel);

  // Soumettre
  boutonsoumettre.addEventListener('click', affichresults);

  boutonprecedent.addEventListener("click", affichslideprecedent);
  
  boutonsuivant.addEventListener("click", affichslidesuivant);

})();






























