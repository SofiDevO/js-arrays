const notas = [8,7,9,6,10];

let  media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length;

console.log(notas);
console.log(media);
//quitar elemento al final
// notas.pop();

//quitar elemento al inicio
notas.shift();

console.log(notas);

media = (notas[0] + notas[1] + notas[2] + notas[3] )/notas.length;
console.log(media);



CenaDeHoy = ['🍔', '🌭', '🍕']

CenaDeHoy.pop()
CenaDeHoy.pop()

CenaDeHoy.push('🍳')
CenaDeHoy.push('🥗')
CenaDeHoy.push('🍏')

console.log(CenaDeHoy)