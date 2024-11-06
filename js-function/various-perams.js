// 
/*
*
*for a given string tell me whether it has even number of character or not
*
*/




function evenSizedString (str){
    const size =str.length;
    console.log(str,size);
    if(size % 2 ===0){
        console.log('Even number');
        return true;
    }
    else{
        console.log('Odd number');
        return false;
    }
}
evenSizedString("Chittagong")
evenSizedString("Dhaka");



function nameSized(named){
    const name =named.length;
    console.log(named,name);
    if(name % 2===0){
        console.log('even named')
        return true;
    }
    else{
        console.log('odd named');
        return false;
    }
}
nameSized('Takmim');




function doubleOrTriple(number, doubleIt){
    if(doubleIt === true){
        const result =number*2;
        return result;
    }
    else{
        const result =number*3;
        return result;
    }
}

console.log(doubleOrTriple(8, true));
console.log(doubleOrTriple(15, false))


function arrayLenth(num){
    const len =num.length;
    return len;
}
arrayLenth([23,434,22,534,6,43,32,26])