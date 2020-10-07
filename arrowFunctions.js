const falar = palavra => console.log(palavra)

falar('opa')

const somar = (num1, num2) => num1 + num2
console.log(somar(1, 2))

const animal = (nome, grunido) => nome+' '+grunido()

console.log(animal('cachorro', () => 'latir'))
