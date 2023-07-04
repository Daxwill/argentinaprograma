const arrayJugadas = ["piedra", "papel", "tijeras"];

function obtenerJugadaComputadora() {
    return arrayJugadas[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
}

function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugada = readlineSync.question("Ingrese su jugada: ");
    jugada = jugada.toLowerCase();
    if (jugada == arrayJugadas[0] || jugada == arrayJugadas[1] || jugada == arrayJugadas[2]) {
        return jugada;
    } else {
        return console.log("Su jugada no esta definida");
    }
}

function determinarGanador(jugadaPC, jugadaUsuario) {
    let resultado;
    if (jugadaPC === jugadaUsuario) {
        return resultado = "Empate";
    } else if (jugadaPC === "piedra" && jugadaUsuario === "tijeras" || jugadaPC === "tijeras" && jugadaUsuario === "papel" || jugadaPC === "papel" && jugadaUsuario === "piedra") {
        return resultado = "Gana la computadora";
    } else {
        return resultado = "Gana el usuario";
    }
}

function cantidadDeJugadas() {
    const readlineSync = require('readline-sync');
    let veces = readlineSync.question("Ingrese la cantidad de jugadas: ");
    return veces;
}

function jugar(cantidadDeVeces) {
    let resultadoFinal;
    let contadorPC = 0;
    let contadorUsuario = 0;
    for (let i = 0; i < cantidadDeVeces; i++) {
        let jugadaCompu = obtenerJugadaComputadora();
        let jugadaUser = obtenerJugadaUsuario();
        let resultado = determinarGanador(jugadaCompu, jugadaUser);
        console.log(`La computadora eligio: ${jugadaCompu}.`);
        console.log(`El usuario eligio: ${jugadaUser}.`);
        console.log(`El resultado fue: ${resultado}.`);
        if (resultado == "Gana el usuario") {
            contadorUsuario++;
        } else if (resultado == "Gana la computadora") {
            contadorPC++;
        }
    }
    resultadoFinal = (contadorPC > contadorUsuario) ? "El resultado final fue: Gana la computadora." :
        (contadorPC < contadorUsuario) ? "El resultado final fue: Gana el usuario." :
            "El resultado final fue: Empate";
    return console.log(resultadoFinal);
}


let n = cantidadDeJugadas();
jugar(n);