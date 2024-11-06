const products =[
    {name : "shampoo", price: 400, quantity:2},
    {name : "shirt", price: 600, quantity:5},
    {name : "pant", price: 800, quantity:6},
    {name : "gel", price: 300, quantity:1},
]

function cartTotal(product){
    let sum = 0;
    for (const item of product){
        const totalItem = item.price *item.quantity;
        sum= sum+totalItem
    }
    return sum;
}
const coostTotal = cartTotal(products)
console.log("Total cost is : ", coostTotal)