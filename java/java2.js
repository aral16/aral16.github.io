(function(){
  function buildQuiz(){
    // Variable pour stocker la sortie HTML 
    const sortie = [];

    // Pour chaque questions...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // Variable pour stocker la liste des réponses possibles
        const answers = [];

        // Et pour chaque réponse disponible...
        for(letter in currentQuestion.answers){

          // Ajout d'un boutton radio
          answers.push(
            `<label>
              <input type="radio" name="questions${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // Ajouter cette question et sa réponse à la sortie
        sortie.push(
          `<div class="questions"> ${currentQuestion.questions} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // Combine notre liste de sortie en string HTML et ajout à la page
    quizContainer.innerHTML = sortie.join('');
  }

  function showResults(){

    // rassembler  containers des réponse du quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // Garder la trace des réponses des utilisateurs
    let numcor = 0;

    // Pour chaque questions...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // Trouver la réponse sélectionné
      const answerContainer = answerContainers[questionNumber];
      const selecteur = `input[name=questions${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selecteur) || {}).value;

      // Si la réponse est correcte
      if(userAnswer === currentQuestion.correctAnswer){
        // Ajoute la la liste des bonnes reponses 
        numcor++;

        // colore la réponse en vert
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // si la réponse est fausse ou vide
      else{
        // color la réponse en rouge
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // Afficher le nombre de bonne réponses
    resultsContainer.innerHTML = `${numcor} bonne réponse(s) sur ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quizz');
  const resultsContainer = document.getElementById('rep');
  const submitButton = document.getElementById('soumis');
  const myQuestions = [
    {
      questions: "Quel monument n’est pas dans la liste officielle des Sept Merveilles du monde ?",
      answers: {
        a: "La pyramide de Khéops",
        b: "L'acropole d'Athènes",
        c: "Le mausolée d'Halicarnasse"
      },
      correctAnswer: "b"
    },
    {
      questions: "Le talon d’Achille est son point faible car :",
      answers: {
        a: "C'est le seul endroit impossible à protéger par une armure.",
        b: "C'est une punition de Zeus contre son invincibilité.",
        c: "Lorsqu'il a été plongé dans le fleuve qui le rendrait invulnérable, il a fallu le tenir par le talon pour qu'il ne se noie pas."
      },
      correctAnswer: "c"
    },
    {
      questions: "À qui Ariane donna-t-elle un fil pour l’aider à libérer les Athéniens de l’appétit du Minotaure ?",
      answers: {
        a: "Hercule",
        b: "Thésée",
        c: "Dédale"
      },
      correctAnswer: "b"
    },
    {
      questions: "La légende veut que Pandore ouvrît la boîte interdite contenant tous les maux de la terre, sa vivacité lui permit cependant d’en rattraper un, lequel ?",
      answers: {
        a: "L'amour.",
        b: "L'espoir.",
        c: "L'amitié'."
      },
      correctAnswer: "b"
    },
    {
      questions: "Héraclès, ou Hercule, est le fils de :",
      answers: {
        a: "Zeus et d'une mortelle.",
        b: "Aphrodite et d'un mortel.",
        c: "Poséidon et d'une vache."
      },
      correctAnswer: "a"
    },
    {
      questions: "Le breuvage des dieux est :",
      answers: {
        a: "L'hydromel",
        b: "Le lait.",
        c: "Le nectar."
      },
      correctAnswer: "c"
    },
    {
      questions: "Quel don funeste possédait Midas ?",
      answers: {
        a: "Il était si beau que tout le monde tombais amoureux de lui.",
        b: "Il changeait tout ce qu'il touchait en or.",
        c: "Il buvait sans jamais ^étre saoul ni pouvoir étancher sa soif."
      },
      correctAnswer: "b"
    },
    {
      questions: "Pygmalion était un roi de Chypre qui tomba amoureux :",
      answers: {
        a: "De lui-même en se mirant dans un lac.",
        b: "De sa mére et il tua son père sans le savoir.",
        c: "De la statue qu'il avait sculptée."
      },
      correctAnswer: "c"
    },
    {
      questions: "Quel oiseau, symbole de la résurrection, renaît sans cesse de ses cendres ?",
      answers: {
        a: "L'Hydre de Lerne.'",
        b: "Le Phénix.",
        c: "Le Sphinx."
      },
      correctAnswer: "b"
    },
    {
      questions: "Les fondateurs de Rome, Romulus et Rémus, furent allaités par :",
      answers: {
        a: "Une louve.",
        b: "Une chèvre.",
        c: "Une lionne."
      },
      correctAnswer: "a"
    },
    {
      questions: "Tantale est condamné par les dieux à ne jamais pouvoir assouvir sa faim et sa soif car :",
      answers: {
        a: "Il a volé la femme de Zeus.",
        b: "Il se vantait d'être plus fort que tous les dieux.",
        c: "Lors d'un banquet, il a fait manger aux dieux son propre fils."
      },
      correctAnswer: "c"
    },
    {
      questions: "Qui Orphée part-il délivrer des Enfers ?",
      answers: {
        a: "Sa femme.",
        b: "Sa fille.",
        c: "Sa mère."
      },
      correctAnswer: "a"
    },
    {
      questions: "Hermès, la marque, a pris pour emblème le dieu :",
      answers: {
        a: "De la Prospérité.",
        b: "De la Beauté.",
        c: "Du Voyage."
      },
      correctAnswer: "c"
    },
    {
      questions: "Le nom romain de Zeus est :",
      answers: {
        a: "Minerve.",
        b: "Mercure",
        c: "Jupiter."
      },
      correctAnswer: "c"
    },
    {
      questions: "Le dieu de la Guerre est Mars en latin, et en grec :",
      answers: {
        a: "Apollon.",
        b: "Hermès.",
        c: "Arès."
      },
      correctAnswer: "c"
    },
    {
      questions: "Thor est le dieu du Tonnerre :",
      answers: {
        a: "Scandinave.",
        b: "Celte",
        c: "Arménien",
        d: "Italien"
      },
      correctAnswer: "a"
    }
  ];

  // Coup d'envoi
  buildQuiz();

  // Soummettre
  submitButton.addEventListener('click', showResults);
})();