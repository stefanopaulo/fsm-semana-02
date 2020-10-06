// global scope
const scopeGlobal = 1

function func() {
    console.log(scopeGlobal)
}
func()

// local scope
function func2() {
    const a = 20
    return a
}

// console.log(a) // a is not defined
