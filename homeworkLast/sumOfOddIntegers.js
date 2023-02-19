// let array = [2]
// let sum = array.reduce((acc, item)=>{
//     if (item % 2 !== 0){
//       acc += item
//     }
//     return acc
// },0)
// console.log(sum)
function getOddSum(arr) {
    return arr.reduce((acc, item) => (item % 2 !== 0 ? (acc += item) : acc), 0);
}
console.log(getOddSum([1, 2, 3, 4, 5]));