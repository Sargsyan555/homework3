let length = function length(sentense) {
    let end = sentense.at(-1)
    return sentense.lastIndexOf(end) + 1
}
console.log(length('159159159'))