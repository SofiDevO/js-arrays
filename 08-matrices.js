const lstAlumnos = [
  "Isabel",
  "Lucas",
  "Elena",
  "Valeria",
];

const lstNotas = [9,8.5,9.5,10];


const ListaUnida = [lstAlumnos, lstNotas];

console.log(ListaUnida[0][1]);

console.log(lstAlumnos);
console.log(lstNotas);
console.log(ListaUnida);


//ejemplo 2


const nombres = ["Ana", "Juliana", "Leonardo"];
const edades = [30, 35, 28];
const universidad = [false, true, true];

const empleados = [nombres, edades, universidad];
console.log(empleados);