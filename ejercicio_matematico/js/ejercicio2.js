const mat = require('./matematicas');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("La suma de 2+2=" + mat.sumar(2, 2));
console.log("La resta de 4-1=" + mat.restar(4, 1));
console.log("La división de 6/3=" + mat.dividir(6, 3));
console.log("El valor de PI=" + mat.PI);

rl.question("Ingrese el número a potenciar: ", function (ptc) {
  rl.question("Ingrese la potencia: ", function (potencia) {
    console.log("La potencia de " + ptc + "^" + potencia + "=" + mat.potenciar(parseFloat(ptc), parseFloat(potencia)));
    rl.close();
  });
});
