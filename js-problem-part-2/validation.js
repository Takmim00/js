function multiply(num1,num2){
    if(typeof num1 !=='number' || typeof num2 !=='number'){
        return "Please provide a number"
    }
    const mult = num1+num2;
    return mult;
}
const result = multiply (5,'seven')
console.log(result)


function fullName (first,second){
    if(typeof first !=='string'){
        return "First name should be a string"
    }
    else if(typeof second !== 'string'){
        return "Second name should be a string"
    }
    const full = first+' '+second;
    return full;
}
const full= fullName('abid', 5)
console.log(full)



function getPrice(product){
    if(typeof product !== 'object'){
        return "please provide an object"
    }
    const price = product.price
    return price;
}
const price = getPrice({name: "shampoo", price : 400, color: 'black'})
// const price =getPrice(8)
console.log(price)



function getSecond(number){
    if(Array.isArray(number) === false){
        return"please provide a array"
    }
    const second = number[1]
    return second;
}
// const second = getSecond([43,54,65,34,6])
const second = getSecond(4)
console.log(second)