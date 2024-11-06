const products =[
    {name : "shampoo", price: 400},
    {name : "shirt", price: 600},
    {name : "pant", price: 800},
    {name : "gel", price: 300},
]


function getShopping(product){
    let sum = 0;
    for(const item of product){
        sum = sum+item.price;
    }
    return sum;
}

const total = getShopping(products);
console.log("Total tk is : ", total)