const height =[ 45,65,76,44,34,87,98]

function getHeight(numbers){
    let max=numbers[0];
    for(const num of numbers){
        if(num > max){
            max=num;
        }
    }
    return max;
}

const max =getHeight(height)
console.log("Max value is :",max)


function getHeight2(number){
    let min=number[0];
    for(const num of number){
       if(num<min){
        min=num
       } 
    }
    return min;
}
const min=getHeight2(height);
console.log("Min value is :",min)