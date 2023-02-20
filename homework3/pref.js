// function whichStartWithPref(words, pref) {
//
//     let res = 0
//     for(let i = 0; i < words.length; i++){
//         let firstChars = words[i].slice(0,pref.length)
//
//         if(firstChars === pref){
//             res++
//         }
//     }
//     return res
// }
//
// console.log(whichStartWithPref(['ataaaaa', 'at', 'as'], 'at'))
function whichStartWithPref(words, pref) {
    let count = pref.length
    let filteredArray = words.filter((item) => item.slice(0, count) === pref)
    return filteredArray.length
}

console.log(whichStartWithPref(['ataaaaa', 'atk', 'as', 'at'], 'at'))