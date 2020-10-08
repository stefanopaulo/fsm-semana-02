// pure function -> funções que dependem exclusivamente da passagem de parâmetros

const somar = (num1, num2) => num1 + num2
const media = (num1, num2) => somar(num1, num2) / 2

console.log(media(5, 8))
