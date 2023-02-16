const obj = {
    rock : 'scissors',
    scissors : 'paper',
    paper : 'rock'
}
let firstPleyer = 'scissors'
let secPlayer = 'scissors'
let res = ''
for(key in obj){
    if (obj[key] === firstPleyer && key === secPlayer){
        res = '1st player win'
    }else if(obj[key] === secPlayer && key === firstPleyer){
        res = '2st player win'
    }else if(firstPleyer === secPlayer){
        res = 'Draw'
    }
}
console.log(res)