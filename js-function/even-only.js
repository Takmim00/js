/*
*creat function that will return only the even numbers
*return the sum of even numbers
*/

function evenNumber(number){
    let evens=[]
    for(const num of number){
        if(num %2 ===0){
            console.log(num)
            evens.push(num)
        }
    }
    return evens;
}
const even=[2,3,5,6,8,4,10]
// const sum =evenNumber(even);
// console.log('even of the number',sum)






function sumOFNumber(number){
    let sums=0
    for(const sum of number){
        if (sum%2===0){
            console.log(sum);
            sums = sums+sum
        }
    }
    return sums
}

const sum=sumOFNumber(even)
console.log('sum of the number',sum)
