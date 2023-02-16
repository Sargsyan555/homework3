
// 5. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
function spelling(string) {
    let arr = []
    for (let i = 0; i < string.length; i++){
        if(arr.length === 0){
            arr.push(string[i])
        }else{
            arr.push(arr[i-1] + string[i])
        }
    }
    return arr
}

console.log(spelling('hjh'))