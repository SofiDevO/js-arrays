const lstNotasYAlumnos = [
  ["Isabel", "Lucas", "Elena", "Valeria"],
  [9, 8.5, 9.5, 10],
];

const nombreALumno = 'Isabel';

if(lstNotasYAlumnos[0].includes(nombreALumno)){
    const posicionAlumno = lstNotasYAlumnos[0].indexOf(nombreALumno);
    const notaAlumno = lstNotasYAlumnos[1][posicionAlumno];
    console.log(`La nota final del alumno ${nombreALumno} es de ${notaAlumno}`);
}else{
    console.log('Alumno No encontrado');
}