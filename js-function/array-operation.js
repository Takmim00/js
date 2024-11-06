/*
*objective : write a function give me the sum of all numbers in array
*step-1: declare a function
*step-2: call check whether the function is called properly
*step-3: set a parameter(s)
*step-4: pas the parameter(s),check whether parameter is passed in a proper format
*step -5 :do the function tasks(step by step)
*/


function sumOfNUmber (number){
    let sum =0;
    for (const num of number){
        console.log(num);
        sum=sum+num;
    }
    return sum
}
const numbs =[33,54,6,45,66,3,78]
const sum =sumOfNUmber(numbs)
console.log('sum of number ',sum)




function sumNumber(number){
    let sum =0;
    for(const numbers of number){
        console.log(numbers);
        sum = sum+numbers;
    }
    return sum;
}
const sums=[3,2,5,6];
const numb=sumNumber(sums)
console.log("Sum of number",numb)