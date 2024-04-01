const lstNotasYAlumnos = [
  ["Isabel", "Lucas", "Elena", "Valeria"],
  [9, 8.5, 9.5, 10],
  ['patata'],
  ["perrijo"],
];


const [lstAlumnos, lstNotas] = lstNotasYAlumnos;


const nombreALumno = "Elena";

if (lstAlumnos.includes(nombreALumno)) {
  const posicionAlumno = lstAlumnos.indexOf(nombreALumno);
  const notaAlumno = lstNotas[posicionAlumno];
  console.log(`La nota final del alumno ${nombreALumno} es de ${notaAlumno}`);
} else {
  console.log("Alumno No encontrado");
}
