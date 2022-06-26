// students score, total possible score
// 15/20 -> you got a c(75%)
// A 90-100 , B 80-89, C 70-79, D 60-69, F 0-59


// top note 20 / top score 100 A

let stdS = function (stdScore = 0, tpsCore = 0) {
    let grade = stdScore / tpsCore
    let gradeScore = grade * 100
    if (gradeScore >= 90) {
        console.log('you grade is A')
    } 
    if (gradeScore >= 80 && gradeScore <= 89) {
        console.log('your grade is B')
    }
    if (gradeScore >= 70 && gradeScore <= 79) {
        console.log('your grade is C')
    }
    if (gradeScore >= 60 && gradeScore <= 69) {
        console.log('your grade is D')
    }
    if (gradeScore >= 0 && gradeScore <= 59) {
        console.log('your grade is F')
    }
}

let firstStd = stdS(19, 20)
console.log(firstStd)