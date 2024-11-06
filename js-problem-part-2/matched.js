const numbers =[43,54,34,67,87];
// for(let i =0;i<numbers.length;i++){
//     const number =numbers[i];
//     console.log(number)
// }

for (const number of numbers){
    // console.log(number)
}

const products =[
    {id:1 , name: 'walton',price : 200000},
    {id:2 , name: 'oppo',price : 200000},
    {id:3 , name: 'samsang phone',price : 200000},
    {id:4 , name: 'lenovo phone',price : 200000},
    {id:5 , name: 'xiaomi',price : 200000},
    {id:6 , name: 'nokia',price : 200000},
    {id:7 , name: 'Dell laptop',price : 200000},
    {id:7 , name: 'HP laptop',price : 200000},
    {id:8 , name: 'oneplus',price : 200000},
    {id:9 , name: 'iphone',price : 220000},
];
function matchProduct (products,search){
    const matched =[]
    for (const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

const result = matchProduct(products,'lapto');
console.log(result)