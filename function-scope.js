// Global scope (convertfarhtoc , cls1, cls2)
  // local scope (farh, celsius)
    // local scope (freezing)
    
let convertFarhToC = function (farh) {
    celcius = (farh - 32) * 5/9

    if (celcius <= 9) {
            let freezing = true
    }

    return celcius
}

let cls1 = 32
let cls2 = 68

let result1 = convertFarhToC(cls1)
let result2 = convertFarhToC(cls2)


console.log(result1)
console.log(result2)
