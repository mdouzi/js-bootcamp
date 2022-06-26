let myBook = {
    title: 'medz',
    author: 'dfbef',
    pagecount: 120
}

let othermyBook = {
    title: 'mylife',
    author: 'hamid babo',
    pagecount: 120
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pagecount} page long`
    }
}

let booksummary = getSummary(myBook)
let otherbooksummary = getSummary(othermyBook)

console.log(booksummary.summary) 

// challenge area
// create function - take fahrenheit in - retunr object with all three

let convertSuper = function (fahrenheit) {
    return {
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit - 32) * 5/9 + 273.15,
        fahrenheit: fahrenheit 
    }
}

let temp = convertSuper(32) 
console.log(temp.kelvin)