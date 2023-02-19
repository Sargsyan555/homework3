const payments = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe", // Name of the student
        payedAmount: 1600, // Amount payed with this transaction
        year: 2020, // The payment year
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1500,
        year: 2021
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1400,
        year: 2022
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1500,
        year: 2020
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1400,
        year: 2021
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        payedAmount: 1200,
        studentName: "Lu Kang",
        year: 2023
    }
];
//Find max payment
function maxPayment(payments) {

    // let arr = []
    // for (item of payments){
    //     arr.push(item.payedAmount)
    // }
    // return Math.max(...arr)
    // let max = 0
    // for (item of payments){
    //     max = item.payedAmount >= max ? item.payedAmount : max
    // }
    // return max

}
console.log(maxPayment(payments))
//Calculate the sum of all payment
function sum(payments) {
    return payments.reduce((acc, item )=> acc + item.payedAmount, 0)
}

console.log(sum(payments))
//Find the count of all payments that are more than 1500
function sumMoreThan1500(payments) {
    return payments.reduce(function (acc, item ){
        if (item.payedAmount >= 1500){
            acc += item.payedAmount
        }
        return acc
    }, 0)
}

console.log(sumMoreThan1500(payments))
//4.  Calculate the average of all payments
let sumAverage = sum(payments) / payments.length
console.log(sumAverage)
//5

function paymentSumAndArray(payments){
    let sum = payments.reduce((acc, item)=> acc + item.payedAmount, 0)//էստեղ իչի է որ += ու + նույ բանն է
    let array = payments.map(item => item.payedAmount)
    return `sum : ${sum}, array : ${array}`
}

console.log(paymentSumAndArray(payments))












