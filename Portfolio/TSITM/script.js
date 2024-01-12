//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("sonido");
        habilidades[1].classList.add("niveles");
        habilidades[2].classList.add("montaje");
        habilidades[3].classList.add("iluminacion");
        habilidades[4].classList.add("narrativo");
    }
}

