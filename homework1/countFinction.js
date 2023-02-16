function charCount(a, b) {
    let result = 0
    for(let item of b){
        if(a === item) result++
    }
    return result
}
console.log(charCount('a', 'aba'))