// 3. countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }) ➞ { moron: 2, scumbag: 1, idiot: 2 }


// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }

let obj =
{
      a: "moron",
      b: "scumbag",
      c: "moron",
      d: "idiot",
      e: "idiot"
} 
function countNumberOfOccurrences(obj){
      let itemFromObject = Object.values(obj) 

      return itemFromObject.reduce((acc, item) => {
            if(acc[item]){
                  acc[item] += 1 
            }else{
                  acc[item] = 1
            }
            return acc
      }, {})
}
console.log(countNumberOfOccurrences(obj));