let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo)

//os verdadeiros

console.log(!!3);
console.log(!!-1);
console.log(!!' texto '); // tem que ter pelo menos um espaço em branco
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = Infinity));

//falso

console.log(!!0);
console.log(!!'');
console.log(!!null)
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log( !!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'desconhecido')

