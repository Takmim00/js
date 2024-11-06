const mobiles =[
    {name:'Samsung', price:60000, camera:"12px", color:'black'},
    {name:'Oppo', price:20000, camera:"12px", color:'black'},
    {name:'Lenovo', price:30000, camera:"12px", color:'black'},
    {name:'I phone', price:100000, camera:"48px", color:'black'},
    {name:'Walton', price:15000, camera:"12px", color:'black'}
]


function getCheapestPhone(phones){
    let min =phones[0]
    for(const phone of phones){
        if(phone.price<min.price){
            min=phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log("Cheapest phone is :", cheap);



function getHigestphone(phones){
    let max = phones[0]
    for (const phone of phones){
        if(phone.price>max.price){
            max=phone;
        }
    }
    return max;
}

const heigest = getHigestphone(mobiles);
console.log("higest phone is :", heigest)