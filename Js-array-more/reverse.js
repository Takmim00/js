let num = [1,2,3,4,5,6,7,8];
// console.log(num);
// // num.reverse();
// const reversed =num.reverse();
// // console.log(num);
// console.log(reversed)


const rev_numbers =[]

for(const number of num){
    // console.log(number);
    rev_numbers.unshift(number)
}
// console.log(rev_numbers)

const reversed_number=[]
for (let n =0; n<num.length;n++){
    const number =num[n];
    reversed_number.unshift(number)
}
// console.log(reversed_number)


// reverse side 
const rev_rev_num=[]
for(let i=num.length-1; i>=0;i--){
    const number =num[i];
    console.log(number);
    rev_rev_num.push(number)
}
console.log(rev_rev_num)