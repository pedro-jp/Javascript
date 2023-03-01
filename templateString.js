const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + ' !'
const template = `Olá
${nome}!` //considera as quebras de linhas e espaços `${variaveis ou  sla mais o que}`

console.log(concatenacao);
console.log(template);

//expressões pode-se utilizar de funções dentro das expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')} !`);
