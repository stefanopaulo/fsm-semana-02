// funções que recebem outras funções

function test(action) {
    action()
}

test(() => console.log('high order function'))

const values = [1, 2, 3, 4]

const double = values.map(value => value * 2)
console.log(double)

const sum = double.reduce((prev, curr) => prev + curr, 0)
console.log(sum)
