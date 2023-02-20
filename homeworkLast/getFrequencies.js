// 2. Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
// getFrequencies([]) ➞ {}
function getFrequencies(array){
    return array.reduce((acc, item) => {
        if(acc[item]){
            acc[item] = acc[item] + 1
        }else{
            acc[item] = 1
        }

        return acc
    }, {})
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]));