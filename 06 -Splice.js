const lstAlumnos = [
  "Lucia",
  "Martina",
  "Hugo",
  "Daniel",
  "Martin",
  "Maria",
  "Sofía",
];
console.log(lstAlumnos)

lstAlumnos.splice(2,2,'Diego', 'Jose', 'Leonardo');
// lstAlumnos.push('Diego', 'Jose', 'Leonardo');

console.log(lstAlumnos);


animalesDeAcuario = ['🐋', '🐙', '🐬', '🦈']

animalesDeAcuario.splice(1,0,'🐠') //En la posicion 1, no se limina nada y se agrega🐠. Tenemos : ['🐋', '🐠', '🐙', '🐬', '🦈']

animalesDeAcuario.splice(3,2,'🐟')// Ahora en la posicion 3, se eliminan dos, '🐬', '🦈'. y se agrega  '🐟'.
console.log(animalesDeAcuario); // se espera [ '🐋', '🐠', '🐙', '🐟' ]
