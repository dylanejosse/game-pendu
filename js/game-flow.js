let tentatives = 9;
let rightLetter = [];
let wrongLetter = [];

//Permet de générer un nombre aléatoire compris entre une valeur min et une valeur max
function getRandomArbitrary(min, max) {
    return parseInt((Math.random() * (max - min) + min), 10);
  }
  
// Permet de générer un mot aléatoire compris dans la length de list
const randomWord = function (list) {
    word = list[getRandomArbitrary(0, Number(list.length-1))];
    return word;
}

// Choix aléatoire du mot dans la liste
let randomSelectedWord = randomWord(allWords);
// Cible l'endroit ou le mot aléatoire sera ajouté
let selectedWordElement = document.querySelector("#selectWord");

for (i=0; i <= randomSelectedWord.length-1; i++) {
    const pLetter = document.createElement("p");
    pLetter.classList.add("letter");
    pLetter.textContent = randomSelectedWord[i];
    selectedWordElement.append(pLetter);
};

// Création du paragraphe affichant le nombre de tentatives restantes
const sectionTentatives = document.querySelector(".mystery-word");
const pTentatives = document.createElement("p");
pTentatives.classList.add("p-tentatives");
sectionTentatives.append(pTentatives);

const handleSelectionUser = function(event) {
    
    let userLetter = event.key;
    
    console.log(randomSelectedWord);

    // Condition qui permet de refuser les caractères spéciaux
    if (forbiddenWord.includes(userLetter)) {
        window.alert("Ce caractère n'est pas autorisé, veuillez choisir une lettre valide ! ")
    }
    else {

    // Avertissement dans le cas où une lettre a déjà été proposé
    if (wrongLetter.includes(userLetter) || rightLetter.includes(userLetter)) {
        window.alert("Vous avez déjà proposé cette lettre ! Veuillez en porposer une autre !");
    }
    else {
    
        if (tentatives > 0) {

            console.log(rightLetter);

            if (inArray(randomSelectedWord, userLetter)) {
            const indexLetter = catchIndexes(randomSelectedWord, userLetter);
        
                for (ind of indexLetter) {
                    let pFind = document.querySelector("h2 p:nth-child(" + (ind+1) + ")");
                    pFind.classList.add("letter--activate");
                    rightLetter.push(userLetter);
                }

                if (rightLetter.length === randomSelectedWord.length) {
                setTimeout(() => {
                    window.alert("Bravo, vous avez gagné !")}, 1);
                setTimeout(() => {
                    location.reload()}, 2);
                }

            }

            else {
                tentatives -= 1;
                console.log(tentatives);
                if (tentatives === 0) {
                    pTentatives.textContent = "Attention, c'est votre dernière tentative !";
                    pTentatives.classList.add("last-tentatives");
                } else {
                    pTentatives.textContent = "Il vous reste " + (tentatives+1) + " tentatives";
                }
                if (tentatives === 8) {
                    const indError = document.querySelector(".transparent");
                    indError.classList.remove("transparent");
                }
          
                // Ajout de la lettre dans la section error
                const errorSection = document.querySelector("footer h4");
                const addWrongLetter = document.createElement("p");
                addWrongLetter.classList.add("wrong-letter");
                addWrongLetter.textContent = userLetter;
                errorSection.append(addWrongLetter);
                wrongLetter.push(userLetter);
            }

        }

        // Avertissement dans le cas où le mot n'est pas trouvé
        else {
            const looseMessage = window.alert("Vous avez perdu ! Le mot à trouver était : " + randomSelectedWord.toUpperCase() + " !");
            location.reload();
        } 
    }
}
}

// Créer l'écouteur d'évènements
const bodyElement = document.querySelector("body")
const userProposition = bodyElement.addEventListener("keypress", handleSelectionUser)