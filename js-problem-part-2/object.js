const noNayok = {
    name: 'shakib',
    id : 343,
    address : 'cricket',
    isSingle : false,
    friend : ['Tamim','Musfiq','Riad','Masharafi'],
    car: {
        brand : 'BMW',
        price : 110000000,
        made: 2024,
        manufacher: {
            name : 'tesla',
            ceo : 'Elon mask'
        }
    },
    name1: 'shakib',
    movie:[{name : 'no.1',year : 2023},{name : 'king',year : 2022}],
    act : function (){
        console.log("acting the khan")
    }
}
// console.log(student.car)
// noNayok.act();
//const product = [14,34,32]
const product = {
    '0':14,
    '1':34,
    '2':32
}

function add (num1,num2){
    console.log(num1,num2)
    console.log(arguments[3])
}
add (12,323,54,32)