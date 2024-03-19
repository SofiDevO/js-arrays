const notas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8];
let sumaNotas = 0;

for(let nota of notas){
 sumaNotas += nota;
}

const valorMedio = sumaNotas/notas.length;

console.log(`El valor de la media es de ${valorMedio.toFixed(2)}`);

//números páres
const numerosPares = [];

for (let i = 2; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);