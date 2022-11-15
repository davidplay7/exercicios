/*const numero = 1;
const fim = 10;
for (let i = 1; i <= fim; i++) {
  const num = numero*i;
  console.log (num);
}
//melhorando

for (let i = 1; i <= 10; i++) {
  console.log(i*5);
}
*/

const lista = [0,1,2,3,4,5,6,7,8];

for (var i = 0; i < lista.length; i++) {
  const numero = lista[i];
  if(numero%2===0){
    console.log (numero);
    }
}
