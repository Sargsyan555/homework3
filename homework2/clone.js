
// 6. clone Array
// clone([1, 1]) ➞ [1, 1, [1, 1]]
// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
function clone(array) {
    return [...array, array]
}

console.log(clone([1, 2, 544]))