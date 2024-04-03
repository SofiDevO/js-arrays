const lstSecA = [9, 8, 6, 5, 7, 9];
const lstSecB = [4, 9, 2, 9, 7, 6, 9];
const lstSecC = [9, 8, 9, 7, 2, 3, 6, 7];
const sumaSeccion = (lst) => {
  return lst.reduce((prev, act) => prev + act, 0);
};

let sumaTotal = sumaSeccion(lstSecA)+ sumaSeccion(lstSecB) + + sumaSeccion(lstSecC);
console.log(sumaTotal);