// 3. Create a function that sorts an array and removes all duplicate items from it.

// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
// set([4, 4, 4, 4]) ➞ [4]
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
//
// function set(array){
//     let newArray = []
//     for(let i = 0; i < array.length; i++){
//         if(!newArray.includes(array[i])) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
function set(array){
    let arr = array.filter((item, index)=>{
        console.log(array.indexOf(item), index)
        return array.indexOf(item) === index

    })
    return arr
}
//
// function setWithMethod(array) {
//    return  array.reduce(function (accumulator, currentValue) {
//        if(accumulator.indexOf(currentValue) === -1){
//            return accumulator.push(currentValue)
//        }
//    }, [])
// }
//
 console.log(set([1,1, 1, 3, 3, 3, 5, 5]) )