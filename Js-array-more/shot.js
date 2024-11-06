const name =["rakib", "akib","sakib", "dakib", "lskib"];
const sortedname= name.sort();
console.log(sortedname)


// const number =[8,4,6,2,7,1,9,3];
const number =[8,47,65,23,7,1,9,3];
// const number_asc=number.sort() //not working 
const number_asc=[...number].sort(function(a,b) {return a-b})
const number_dsc=[...number].sort(function(a,b) {return b-a})
console.log(number_asc)
console.log(number_dsc)