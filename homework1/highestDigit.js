function highestDigit(number){
    let arr = String(number).split('').join('')
    return Math.max(...arr)
}
    console.log(highestDigit(9915))