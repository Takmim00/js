// ternary condition 


// simple if else

// const age =17 ;


// // simple condition 
// // if (age >= 18){
// //     console.log ("You can vote know")
// // }
// // else{
// //     console.log("Ghumai jao")
// // }

// // ternary condition 

// // age >=18 ? console.log("you can vote ") : console.log(" Ghumai por")

// let price = 400;
// const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price+200;
// }
// // console.log(price);

// price = isLeader === true? 0 : price+300;
// console.log(price)

// var weight = 50;
// var height =66;


// if ( weight <18.5 ){
//     console.log("you are over weight")
// }
// else if(weight>=18.5){
//     if( weight <=24.5){
//         console.log("You are normal");
//     }
//     else{

//     }
// }

// let score = 75;
// let grade;
// if (score >= 90) {
//  grade = "A";
// } else if (score >= 80) {
//  grade = "B";
// }
// console.log(grade);


// let x = 5; 
// if (x < 10) { x = x + 3; } else { x = x - 2; } console.log(x);

// var num = 10;
// if (num > 15) {
//   console.log("Greater than 15");
// } else if (num > 5) {
//   console.log("Greater than 5 but less than or equal to 15");
// } else {
//   console.log("Less than or equal to 5");
// }
var weight = 60;
var height = 3.6;

var bmi = weight / (height * height)
console.log(bmi)
if(bmi < 20.5){
  console.log("You are underweight")
}
else if(bmi >=20.5 && bmi <=30.9){
  console.log("You are normal")
}
else if (bmi >=40 && bmi <=50.9){
  console.log("You are overweight")
}
else{
  console.log("You are obese")
}