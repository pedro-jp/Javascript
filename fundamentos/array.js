//Arrays
const valores = [5.5, 3.3, 43.2, 4.3, 5.3];

console.log(valores[0], valores [2], valores) //[4]); //Seleção de array

valores [3] = 'Olá';
valores [2] = 10; //Mudança de dados do array

console.log(valores);
console.log(valores.length) //Quantidade de //dados no array

valores.push({id: 3}, false, null, 'Teste');//Adicionando dados no Array
console.log(valores);

console.log(valores.pop()) //Tira o último dado
console.log(valores)

delete valores [0] //Deleta o dado selecionado
console.log(valores)

console.log(typeof valores)