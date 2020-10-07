// context == this

const obj = {
    var1: 10,
    get() {
        return this.var1
    }
}

console.log(obj.get.bind({ var1: 20 })())
