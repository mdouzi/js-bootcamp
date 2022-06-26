let temp = 150

// logical and Operator - true if both side are truth
// logical or operator - true if at leat one side is true. fales otheriwse

if (temp >= 66 && temp <= 90) {
    console.log('it is prettynice out')
}

if (temp <= 0 || temp >= 120) {
    console.log('do not go out')
} else {
    console.log('eh. do what you want')
}

// challenge area

let is1Vegan = true
let is2Vegan = false

// are both vegan  only offer up vegan dishes.
// at least one vegan : make sure offer up  some g-vegan options
// else, offer up anything on the menue

if ( is1Vegan && is2Vegan) {
    console.log('only offers up vegan dishes')
} else if (is1Vegan || is2Vegan) {
    console.log('make sure to oofer up some vegan options')
} else {
    console.log('offer up anything on the menue')
}