const prices=[20000,40000,16000,30000,100000,12000,60000]

function getMin(number){
    let min = number[0]
    for(const num of number){
        if(num<min){
            min=num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log("Cheapest price is :", cheap)