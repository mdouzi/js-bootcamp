// undefined for variable
let name 

name = 'mohamed'

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log('name')
}

// undefined for funcyion arguments
// undefined as function retun default value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as a assined value
let age = 22

age = null

console.log(age)