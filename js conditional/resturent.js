const age=35;
const price =500;

if (age <= 15){
    console.log("You can eat free")
}
else if (age >= 60){
    //50% discount 
    const discount = price *50 /100;
    const payment = price - discount;
    console.log (payment)
}
else if (age >= 40){
    //10% discount 
    const discount = price *10 /100;
    const payment = price - discount;
    console.log (payment)
}
else if (age >= 30){
    //5% discount 
    const discount = price *5 /100;
    const payment = price - discount;
    console.log (payment)
}
else{
    console.log(price)
}