const readlineSync = require('readline-sync');
let mesUsuario = readlineSync.question("Ingrese el numero del mes: ");

const ARRAYMESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

if (mesUsuario == 2) {
    console.log("La cantidad de dias del mes de " + ARRAYMESES[mesUsuario - 1] + " es 28");
} else if (mesUsuario == 1 || mesUsuario == 3 || mesUsuario == 5 || mesUsuario == 7 || mesUsuario == 8 || mesUsuario == 10 || mesUsuario == 12) {
    console.log("La cantidad de dias del mes de " + ARRAYMESES[mesUsuario - 1] + " es 31");
} else if (mesUsuario == 4 || mesUsuario == 6 || mesUsuario == 9 || mesUsuario == 11) {
    console.log("La cantidad de dias del mes de " + ARRAYMESES[mesUsuario - 1] + " es 30");
}
