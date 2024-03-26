const lstNombres = ['Diego', 'Maria','Leonardo'];

lstNombres.forEach((nombre)=>console.log(nombre));

//declaracion de funcion
function imprimeNombres(nombre){
    console.log(nombre);
}

lstNombres.forEach(imprimeNombres);
