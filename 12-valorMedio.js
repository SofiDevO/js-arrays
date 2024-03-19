const notas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8];
let sumaNotas = 0;

for (let i = 0; i < notas.length; i++) {
 sumaNotas += notas[i];
};


const mediaAritmetica = sumaNotas/notas.length;
console.log(sumaNotas);

console.log(`El valor de la media Aritmética es de ${mediaAritmetica.toFixed(2)}`)