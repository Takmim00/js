let sentence = " I am learning web dev."
let reverse = ''
for(let letter of sentence){
    // console.log(letter)
    reverse = letter+reverse;
}
console.log(reverse)


const reversed = sentence.split('').reverse().join('');
console.log(reversed)