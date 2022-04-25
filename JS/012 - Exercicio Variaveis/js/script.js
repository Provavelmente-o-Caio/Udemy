let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log(varA, varB, varC);

/*
Método Antigo:
let rep = varA;
varA = varB; //B
varB = varC; //C
varC = rep; //A
*/

//Método Moderno:
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);