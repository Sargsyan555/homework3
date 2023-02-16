function isPlural(word){

    return word[word.length - 1]  === 's' ? true : false
}
console.log(isPlural("change"))