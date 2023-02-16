function arrayOfMultiple(num, count){
    let array = []
    if (num === 0){
        return [0]
    }else {
        for (let i = 1; i <= count; i++){
            array.push(num * i)
        }
    }
    return array
    
}

console.log(arrayOfMultiple(4, 1))