const lstAlumnos = ['Jose','Maria','Diego', 'Juliana', 'Leonardo'];
const lstNotas = [4,5,6,5,8];

/* const lstalumnosReprobados = lstAlumnos.filter((e,i)=>{
    if(lstNotas[i] < 6){
        return true;
    }
}) */

const lstalumnosReprobados = lstAlumnos.filter((e,i)=> lstNotas[i] < 6);

console.log(lstalumnosReprobados);