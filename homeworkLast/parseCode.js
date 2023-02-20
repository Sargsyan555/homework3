// 4. Create a function which takes in an encoded string and returns an object according to the following example:
// parseCode("John000Doe000123") ➞ {
//   firstName: "John",
//   lastName: "Doe",
//   id: "123"
// }
let str = "John000Doe000123"
function parseCode(str){
    let obj = {}
    return str.slice('0')
}
console.log(parseCode(str));