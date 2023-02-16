function potatoes(word){
    let k = 0
    let a = 0
    let idx = null
    while( idx !== -1){
        idx = word.indexOf('potato' , a)
        a = idx + 1
        k++
    }
    return k - 1
}
console.log(potatoes('potatoespotatoespotatoespotatoespotatoespotatoes'))
