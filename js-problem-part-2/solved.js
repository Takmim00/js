// problem -01
function calculateTax(income, expenses) {
    if(income <= 0 || typeof expenses !== 'number'){
        return "Invalid Input";
    }
    let saving = income - expenses;
    let tex = saving * 0.2;
    return tex;
}

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

// problem-03
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

// problem-04
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