/**
 * Chair  --> 3cft 
 * table --> 10cft 
 * bed --> 50cft
 * 
 */


function woodQuantity(chaiQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const totalChairWood = chaiQuantity * perChairWood;
    const totalTableWood =tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    const totalWood = totalChairWood +totalTableWood +totalBedWood;
    return totalWood;
}
const wood =woodQuantity(1,1, 5);
console.log("wood needed :",wood);




/**
 * shirt P =500
 * pant price = 400
 * shoe price =900
 */


function jamaQuantity(shirt, pant, shoe){
    const perShirtPrice= 500;
    const perPantPrice =400;
    const perShoePrice =900;

    const totalShirt = shirt*perShirtPrice;
    const totalPant  = pant*perPantPrice;
    const totalShoe = shoe*perShoePrice;

    const totalPrice = totalShirt+totalPant+totalShoe;
    return totalPrice;
}

const total=jamaQuantity(4,6,2);
console.log("Total nedded :",total)