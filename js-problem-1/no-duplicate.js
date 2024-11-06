/**
 * array has some duplicate elements
 * []
 */

function noDuplicate (array){
    const unique =[]
    for(const item of array){
        if(unique.includes(item)=== false){
            unique.push(item)
        }
    }
    return unique;
}

const biriyaniKhor =['abul','babul','abul','cabul','babul','abul','cabul','dabul'];
// const uniqueArray =noDuplicate(biriyaniKhor)
// console.log(uniqueArray)


function noDuplicate2 (array){
    const unique=[]
    for(const number of array){
        if(unique.includes(number) === false){
            unique.push(number)
        }
    }
    return unique;
}

const number =[5,45,6,5,8,6,45,9,8,5,6,80,75]
const uniqueNumber =noDuplicate2(number)
console.log(uniqueNumber)
