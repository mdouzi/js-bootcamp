// functions - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return result
}


let value = square(3)
let otherValue = square(4)

console.log(value)
console.log(otherValue)

// challenge Area

// convert Farhrenhiet to celcius

// call a couple of time (32 -> 0) (68 -> 20)

// print the converted values

let convertFarhToC = function (num) {
    celcius = (num - 32) * 5/9
    return celcius
}

let cls1 = 32
let cls2 = 68

let result1 = convertFarhToC(cls1)
let result2 = convertFarhToC(cls2)

console.log(result1)
console.log(result2)
