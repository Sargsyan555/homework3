// 7. Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
//  // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)
function indexMultiplier(array) {
    return array.reduce((acc, item, idnex) =>acc + item * idnex , 0)
}

console.log(indexMultiplier([]))