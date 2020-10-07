function func1(initial) {
    let contador = initial
    return function() {
        contador++
        return contador
    }
}

const funcA = func1(10)
console.log(funcA())
console.log(funcA())

const funcB = func1(20)
console.log(funcB(), funcB(), funcA(), funcB())

function animal(name) {
    let count = 0
    
    return {
        getCount: function() {
            return count
        },
        increment: function() {
            count++
        },
        getName: function() {
            return name
        }
    }
}

const cat = animal('gato')
cat.increment()
console.log(cat.getCount(), cat.getName())

const dog = animal('cachorro')
dog.increment()
console.log(dog.getCount(), dog.getName())
