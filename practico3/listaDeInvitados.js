let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] === "Jose" || personas[i] === "Sofia") {
        rechazados = rechazados.concat(personas[i]);
    } else {
        admitidos = admitidos.concat(personas[i]);
    }
}
for (let i = 0; i < admitidos.length; i++) {
    console.log("La lista de invitados admitidos es: " + admitidos[i]);
}

for (let i = 0; i < rechazados.length; i++) {
    console.log("La lista de invitados rechazados es: " + rechazados[i]);
}