//ajustar la escala de las notas del 1 al 10  para 1 a 5,
// si la nota es menor de 3, se debe asignar 3.

const notas = [10,9,5,3,7,9];

const notasActualizadas = notas.map((nota)=> (nota / 2) < 3? 3 : (nota/2));

console.log(notasActualizadas);