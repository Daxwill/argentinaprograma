let substring = "tigres comen trigo";
let cita = "Tres tristes " + substring + " en un trigal";

let tamanioDeCita = cita.length;
console.log("El tamaño de la cita es " + tamanioDeCita);

let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);

let citaRevisada = cita.slice(0, indice + substring.length);
console.log(citaRevisada);
