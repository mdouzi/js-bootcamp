let add = function (a, b) {
    result = a + b
    return result
}

let bb = add(10, 1)
console.log(bb)

// deafult arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  //  return 'Name: ' + name + ' Score: ' + score
    return `Nmae : ${name} - score: ${score}`
}
 
let score1 = getScoreText(undefined, 20)
console.log(score1)

// Challenge area
// total, tipPercent .2

let geTip = function (total = 0, percent = 0) {
    result = (total / 100) * percent
    return 'tips:' + result
}

let client12 = geTip(600, 50)

console.log(client12)


let name = 'mohamed'
console.log(`hey my name is ${name}`)