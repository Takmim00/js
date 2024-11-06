let a =7;
let b =4;

console.log(a,b);
// a=b;
// b=a;

const temp =a;
a = b;
b = temp;
console.log(a,b)




let c =5;
let d =6;
console.log(c,d);
[c,d]=[d,c];
console.log(c,d)

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}

Math.sqrt