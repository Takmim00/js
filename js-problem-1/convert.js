//12inch 1feet 

function inchToFeet (inch){
    const feet = inch/12;
    return feet;
}
// const shuvoHieght =inchToFeet(75);
// console.log(shuvoHieght)



function inchToFeet2 (inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchremaining = inch %12;
    const result =feetNumber+" Feet "+inchremaining+" inch";
    return result;
}
const shuvoHieght =inchToFeet2(75)
// console.log(shuvoHieght)



function mileToKm(mile){
    const km = mile*1.60934
    return km;
}

const kilo = mileToKm(3);
console.log(kilo)


function kiloToMile (kiloo){
    const mile =kilo*0.62137119 ;
    return mile;
}

const mile = kiloToMile(5);
console.log(mile)