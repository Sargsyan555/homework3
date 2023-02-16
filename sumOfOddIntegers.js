let array = [2]
let sum = array.reduce((acc, item)=>{
    if (item % 2 !== 0){
      acc += item
    }
    return acc
},0)
console.log(sum)