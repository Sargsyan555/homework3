// 4 Given a word, write a function that returns the first index and the last index of a character.

// charIndex("hello", "l") ➞ [2, 3]
// //  The first "l" has index 2, the last "l" has index 3.
// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.
// charIndex("happy", "h") ➞ [0, 0]
// // Only one "h" exists, so the first and last index is 0.
// charIndex("happy", "e") ➞ undefined
// // "e" does not exist in "happy", so we return undefin
function charIndex(word, char){
    let firstChar = word.indexOf(char) === -1 ? undefined :  word.indexOf(char)
    let lastChar = word.lastIndexOf(char) === -1 ? undefined : word.lastIndexOf(char)
    if(firstChar === undefined && lastChar === undefined){
        return undefined
    }else{
        return [firstChar ?? lastChar, lastChar ?? firstChar]
    }

}
console.log(charIndex('hello', 'o'))