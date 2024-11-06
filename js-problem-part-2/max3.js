const chin = 56;
const tim =75;
const lim =43;

if (chin>tim && chin>lim){
    console.log("Chin is the ultimate boos .")
}
else if(tim > chin && tim> lim){
    console.log("tim is the best boss")
}
else {
    console.log("lim is the boss")
}

function maxThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
const max = maxThree(100,87,98)
console.log("who is the best ", max)