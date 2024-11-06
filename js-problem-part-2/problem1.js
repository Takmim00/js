function calculateMoney(ticketSale){
    // if(ticketSale <0 || typeof ticketSale !=='number'){
    //     return "Invalid Number"
    // }
    // let remainingAmount=ticketSale*120-(500+8*50);
    return ticketSale*120-(500+8*50);
    // return remainingAmount;
}
console.log(calculateMoney(10))
console.log(calculateMoney(1055))
console.log(calculateMoney(93))
console.log(calculateMoney(-103))

function calculateMoney(ticketSale) {
    // if(ticketSale <=0 || typeof ticketSale !== 'number'){
    //     return 'Invalid number'
    // }
    let remainingBalane = ticketSale*120 -(500+8*50)
    return remainingBalane;
}

function calculateMoney(ticketSale) {
    // if(ticketSale <=0 || typeof ticketSale !== 'number'){
    //     return 'Invalid Number'
    // }
    let remainingBalance = ticketSale * 120 - (500+8*50)
    return remainingBalance;
}
// console.log(calculateMoney(10))
// console.log(calculateMoney(1055))
// console.log(calculateMoney(93))
// console.log(calculateMoney(-103))







// problem -2

function checkName(name){
    if(typeof name!== 'string'){
        return 'Invalid'
    }
    let lastLetter = name.slice(-1).toLowerCase()
    let result = false;
    let checkArray =['a','y','i','e','o','u','w']

    for(let char of checkArray){
        if(char === lastLetter){
            result = true;
        }
    }
    // let result =checkArray.includes(lastLetter)

    return result ? 'Good Name': 'Bad Name';
}

// function checkName(name){
//     if(typeof name !== 'string'){
//         return 'Invalid'
//     }
//     let lastLetter = name.slice(-1).toLowerCase()
//     let result = false;
//     let checkArray = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w']
//     for(let chr of checkArray     
//     ){
//         if(chr === lastLetter){
//             result = true;
//         }
//     }
//     return result ? 'Good name' : 'Bad name'
// }

function checkName(name) {
    if (typeof name !== 'string'){
        return 'Invalid'
    }
    let lastLetter = name.slice(-1).toLowerCase()
    let result = false;
    let checkArray =['a', 'y', 'i' , 'e' , 'o' , 'u', 'w']
    for(let char of checkArray){
        if(char === lastLetter){
            result = true
        }
    }
    return result ? 'Good Name' : 'Bad name '
}


// console.log(checkName('salman'))
// console.log(checkName('RAFEEE'))
// console.log(checkName('jhankar'))
// console.log(checkName(1522))
// console.log(checkName(['dddd']))




// problem-3

function deleteInvalids(array){
    if(Array.isArray(array)=== false){
        return "Invalid Array "
    }
    let numberArray= []
    for(const element of array){
        if(typeof element ==='number' && isNaN (element) === false){
            numberArray.push(element)
        }
    }
    return numberArray;
}

function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return 'Invalid'
    }
    let numberArray =[]
    for(let number of array){
        if(typeof number ==='number' && isNaN(number) === false){
            numberArray.push(number)
        }
    }
    return numberArray
}

function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return "invalid"
    }
    let numberArray =[]
    for (let element of array){
        if(typeof element === 'number' && isNaN (element) === false){
            numberArray.push(element)
        }
    }
    return numberArray
}


// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
// console.log(deleteInvalids(["1" , {num:2} , NaN ]))
// console.log(deleteInvalids([ 1 , 2 , -3 ] ))
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))




// problem -04


function password(obj) {
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !==4){
        return "invalid"
    }
    // let capitalize = obj.siteName[0].toUpperCase()+obj.siteName.slice(1)
    let capitalize = obj.siteName[0].toUpperCase()+obj.siteName.slice(1)
    let passwordKey = capitalize + '#' + obj.name + '@' + obj.birthYear;
    return passwordKey
}

function password(obj){
    if(obj.siteName === undefined || obj.name === undefined || obj.birthYear === undefined || obj.birthYear.toString().length !== 4){
        return 'Invalid'
    }
    let capitalize = obj.siteName[0].toUpperCase()+obj.siteName.slice(1)
    let passkey = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
    return passkey
}


function password (obj){
    if (obj.siteName === undefined || obj.name === undefined || obj.birthYear === undefined || obj.birthYear.toString().length !== 4){
        return 'Invalid'
    }
    let capitalize = obj.siteName[0].toUpperCase()+obj.siteName.slice(1)
    let key = capitalize + '#' + obj.name + '@' +obj.birthYear;
    return key;
}

// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" } ))
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }))
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))
// console.log(password({ name: "maisha", birthYear: 2002 } ))


// problem -05

function monthlySavings(arr , livingCost){
    if(Array.isArray(arr) === false || typeof livingCost !== 'number'){
        return "Invalid input"
    }
    let totalIncome =0;
    for(let payment of arr){
        if(payment >= 3000){
            let tex = payment* 0.2;
            totalIncome += payment -tex;
        }
        else{
            totalIncome += payment;
        }
    }
    let saving = totalIncome - livingCost
    // if(saving >= 0){
    //     return saving
    // }
    // else{
    //     return "earn more"
    // }
    return saving >= 0? saving : 'earn more'
   
}


function monthlySavings(arr , livingCost){
    if(Array.isArray (arr) === false || typeof livingCost !== 'number'){
        return 'Invalid'
    }
    let monthlyIncome =0;
    for(let payment of arr){
        if(payment >= 3000){
            let tex = payment *0.2 
            monthlyIncome += payment -tex
        }
        else(
            monthlyIncome += payment
        )
    }
    let savings = monthlyIncome - livingCost;
    if(savings >=0){
        return savings;
    }
    else{
        return 'earn more'
    }

} 
// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400)) 
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000)) 
// console.log(monthlySavings(100, [ 900 , 2700 , 3400])) 