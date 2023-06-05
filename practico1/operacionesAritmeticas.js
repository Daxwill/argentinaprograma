let n1 = 10;
let n2 = 12;
let n3 = 19;
let n4 = 21;
let resultadoSuma = n1 + n2;
let resultadoResta = n4 - n3;
let resultadoFinal = resultadoSuma * resultadoResta;
let esPar = (resultadoFinal % 2) == 0;

console.log("Mis variables iniciales fueron: " + n1 + ", " + n2 + ", " + n3 + " y " + n4 + ". La respuesta a verificar si el resultado final es par es: " + esPar)

// consultar esPar debe ser resultado numerico o un boolean...?