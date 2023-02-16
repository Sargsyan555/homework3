//
// 2. Create a function that returns an array of strings sorted by length in ascending order.
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ['aprill', "may", "april", "l", "september"]
// sortByLength([]) ➞ []
function sortByLength(array) {
    return array.sort((a, b )=> a.length-b.length)
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]))
