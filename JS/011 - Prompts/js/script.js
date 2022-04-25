let confirmar = window.confirm('Será que vale a pena?');

console.log(confirmar);

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');
num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;
alert(`O resultado foi ${resultado}.`);