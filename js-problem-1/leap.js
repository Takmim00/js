/*
*You will be a leap year if the year divisible by 4
*/

function isLeapYear(year){
    if (year %4===0){
        return true;
    }
    else {
        return false;
    }
}
const leap = isLeapYear(2024);
// console.log(leap)


/*
* 1. THose year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year .
* 2.if the year is divisible by 400, then it is a leap year
* 3. else it is not a leap year 
*/

function isLeapYear2 (year){
    if(year%100 !==0 && year %4 ===0){
        return true;
    }
    else if(year%100 ===0 && year %400 ===0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap=isLeapYear2(2700);
const isLeap1=isLeapYear2(3000);
const isLeap2=isLeapYear2(1700);
const isLeap3=isLeapYear2(2024);
console.log(isLeap,isLeap1,isLeap2,isLeap3)