const date = new Date(2024-11-21);
console.log(date)
console.log(date.getMonth())
console.log(date.getDay())

const specificDate = new Date(2024,0,11)
console.log(specificDate)
specificDate.setMonth(11)
console.log(specificDate)
console.log(specificDate.toLocaleString())
console.log(specificDate.toLocaleString('en-GB'))