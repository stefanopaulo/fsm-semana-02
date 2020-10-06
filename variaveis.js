let a = 20
a = 1.0
let name = 'Stefano'
name = "Stefano"

let obj = {
    name,
    obj: {
        a
    }
}

let b = obj.obj.a
console.log(b)
console.log(obj.name)

let arr = [1, 2, 3, 4]
console.log(arr[3])

let funcao = function(func) {
    func('de dentro da função')
}

let funcaoCopia = funcao
funcaoCopia(console.log)
