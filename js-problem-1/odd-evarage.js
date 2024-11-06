/*
* 1. function takes an array as parameter
* 2. give me the average of the odd number in the array
*/



function isOddNumber (numbers){
    const odds=[]
    for(const number of numbers){
        if(number %2===1){
            // console.log(number);
            odds.push(number)
        }
    }
    //odd is the array that contains only the odd number
    // console.log(odds)
    let sum=0;
    for(const number of odds){
        sum = sum+number;
    }
    const count = odds.length;
    console.log(sum,count);
    const avg = sum/count;
    return avg;
}
// const numbers=[21,43,2,44,88,79,3,87];
// const avg =isOddNumber(numbers);
// console.log("Avarage of the odd numbe is:",avg)




function isEvenNumber(numbers){
    const evens =[]
    for(const number of numbers){
        if(number %2 === 0){
            // console.log(number)
            evens.push(number)
        }
    }
    console.log(evens);
    let sum=0;
    for(const number of evens){
        sum = sum+number;
    }
    const count = evens.length;
    console.log(sum,count);
    const avg = sum /count;
    return avg;
}
const numbers =[44,33,24,66,8,56,89,90,6];
const avg = isEvenNumber(numbers);
console.log("Avarage of the even number :",avg)