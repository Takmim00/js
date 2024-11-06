// problem -01
function calculateTax(income, expenses) {
    if(income <= 0 || typeof expenses !== 'number'){
        return "Invalid Input"
    }
    let saving = income - expenses;
    let tex = saving * 0.2;
    return tex;
}
// console.log(calculateTax (10000, 3000))
// console.log(calculateTax (34000, 1753))
// console.log(calculateTax (5000, 1500))
// console.log(calculateTax (7000, 7000))
// console.log(calculateTax (-5000, 2000))



// problem -02

function sendNotification(email) {
    let emails = email.split('@')
    let sign = 0;
    for(let i= 0;i< email.length; i++){
        if(email[i] === '@'){
            sign++;
        }
    }
    if(!sign){
        return "Invalid Email";
    }
    let username = emails[0];
    let domainName = emails[1];
    if(username && domainName){
        result = username + " sent you an email from " + domainName;
    }
    return result;
}

console.log(sendNotification('zihad@gmail.com'))
console.log(sendNotification('farhan34@yahoo.com'))
console.log(sendNotification('nadim.naem5@outlook.com'))
console.log(sendNotification('fahim234.hotmail.com'))
console.log(sendNotification('sadia8icloud.com'))

// const email = 'zihad@gmail.com'
// console.log(email.indexOf("@"))

// function sendNotification(email){
    
//     for(let send of email){
//         if(send){
//             result = username+'@'+domainName
//         }
//     }
//     return result

// }

// problem-04
// function calculateFinalScore(obj) {
//     if(typeof obj !== 'object'){
//         return "Invalid Input"
//     }
//     let totalMarks = obj.testScore + obj.schoolGrade;
//     if(obj.isFFamily){
//         totalMarks = totalMarks + 20
//     }
//     console.log(totalMarks)
//     if(obj.isFFamily || totalMarks >=80){
//         return true;
//     }
//     return false; 
// }

function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input"
    }
    let totalMarks = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalMarks = totalMarks + 20
    }
    if(obj.isFFamily && totalMarks >=80){
        return true;
    }
    return false; 
}
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
))
console.log(calculateFinalScore("hello" ))
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))


// problem-03;

function checkDigitsInName(name) {
    if(typeof name !=='string'){
        return "Invalid Input";
    }
    let chars = [...name];
    for(let i= 0; i<chars.length;i++){
        let char = chars[i]
        if(!isNaN(char)){
            return true;
        }
    }
    return false;
}
// console.log(checkDigitsInName('Raj123'))
// console.log(checkDigitsInName('n9ayeem'))
// console.log(checkDigitsInName('e1mu3'))
// console.log(checkDigitsInName('Suman'))
// console.log(checkDigitsInName('Name2024'))
// console.log(checkDigitsInName('!@#'))
// console.log(checkDigitsInName(["Raj"]))

// problem-05

function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes)  || typeof serialNumber !=='number'){
        return 'invalid'
    }
    let totalTime =0;
    for(let i = 0; i<waitingTimes.length; i++){
        totalTime = totalTime + waitingTimes[i]
    }
    let averageTime = Math.round(totalTime / waitingTimes.length)
    let serial = serialNumber -1;
    let remainingPeople = serial - waitingTimes.length ;
    
    let waitingTime = remainingPeople * averageTime;
    return waitingTime;   
}
// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
// console.log(waitingTime([13, 2], 6))
// console.log(waitingTime([13, 2, 6, 7, 10], 6))
// console.log(waitingTime([6], 4))
// console.log(waitingTime(7 , 10))
// console.log(waitingTime("[6,2]", 9))
// console.log(waitingTime([7, 8, 3, 4, 5], "9"))