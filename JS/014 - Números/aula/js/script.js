let var1 = 0.1;
let var2 = 0.2;



document.body.innerHTML = `
<p>O valor da primeira variável é: </p><h3>${var1}</h3></br>
<p>O valor da primeira variável é: </p><h3>${var2}</h3></br>
<p>O valor da soma é: </p><h3>${var1 + var2}</h3></br>
<p>O valor corrigido da soma é: </p><h3>${Number((var1+var2).toFixed(2))}</h3></br>
`;

/*
ou ${ParseFloat((var1+var2).toFixed(2))}
Outra solução para o problema é artificialmente fazer eles deixarem de serem fracionados e dividir eles depois
*/