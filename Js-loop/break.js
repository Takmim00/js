// for(let i=0;i<20;i++){
//     console.log(i);
//     if(i>=5){
//         break;
//     }
// }
// console.log("life after breakup ")

// let i =55;

// while(i > 25){
//     if(i<50){
//         break;
//     }
//     console.log(i);
//     i--;
// }

// for(let i=1; i<10;i++){
//     if(i%2===1){
//         console.log(i)
//     }
// }


let n=0;
while(n<20){
    n++;
    if(n%5!==0){
        continue;
    }
    console.log(n);
}