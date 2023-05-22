// Cibler le bouton mode nuit
const imgDarkMode = document.querySelector(".presentation-rules img");

const darkMode = {

    toggleDarkMode : function() {
        bodyElement.classList.toggle("dark--mode");

        if(bodyElement.classList.contains("dark--mode")) {
                imgDarkMode.src = "../img/light-mode.png";
            }
        else {
                imgDarkMode.src = "../img/night-mode.png";
        }
    }
}

// Mise en place de l'écouteur d'évènement sur l'image du mode nuit
const imgDarkModeClick = imgDarkMode.addEventListener("click", darkMode.toggleDarkMode);