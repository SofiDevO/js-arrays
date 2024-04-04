const lstAlumnos = ['Jose', 'Maria','Jose', 'Luis', 'Jose', 'Maria'];
const alumnosUnicos = [...new Set(lstAlumnos)];


console.log(alumnosUnicos);



const numeros = [43, 50, 65, 12]

const suma = numeros.reduce((acc, actual) => actual + acc, 0)

console.log(suma) //170


//
function suma(a,b,c,d){
    return a + b + c + d;
}

console.log(suma(43, 50, 65, 12));