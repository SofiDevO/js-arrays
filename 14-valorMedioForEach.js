const notas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8];

let sumaNotas = 0;
notas.forEach((nota, posicion)=>{
    sumaNotas += nota;
    console.log(posicion);
}
)

const valorMedio = sumaNotas/notas.length;

console.log(`El valor de la media aritmética es de ${valorMedio}`)