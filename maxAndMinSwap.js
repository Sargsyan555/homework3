let array = [1, 2, 3, 4, 5, 989, 545]
// array.sort((a, b) => a - b)
// let arr1 = array.slice(0, Math.floor(array.length / 2))
// let arr2 = array.slice(Math.floor(array.length / 2))
// let k =
// console.log(arr1, arr2)
let result = []
if(array.length < 3){
    result = [...array]
}else{
    let min = Math.min(...array)
    let max = Math.max(...array)
    let res = [...array]
    result = [max, min]
    while(true){
        res = res.filter(value => value !== max && value !== min)
        if(!res.length){
            break
        }else if(array.length - 1 === result.length){
            result.push(res[0])
            break
        }else{
            min = Math.min(...res)
            max = Math.max(...res)
            result.push(max, min)
        }
    }
}


console.log(result)
