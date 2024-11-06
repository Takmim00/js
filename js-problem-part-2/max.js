dish = 79;
salmon = 89;

if(dish > salmon){
    console.log("dish get the strawbery")
}
else{
    console.log('salmon get the strawbery')
}




function getMax(nam1,nam2){
    if(nam1>nam2){
        return nam1;
    }
    else{
        return nam2;
    }
}
const max1 = getMax(54,68);
const max2 = getMax(89,79);
const ultraMax=getMax(max1,max2)
console.log("Max of two this :",ultraMax)
