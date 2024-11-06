// const person = {
//     Name : "shodor uddin",
//     job : 'Developer',
//     selary :20000,
//     age :25,
//     "fav place":["coxs-bazar", "saintmartin", "fouslake"]
// }

// console.log(person);


// dot notation 
// console.log(person.job);
// const income = person.selary;
// console.log(income)


// break notation 

// console.log(person['age'])
// const kaj = person['job']
// console.log(kaj)


// console.log(person['fav place'])

// const keyname =['job']
// console.log(person[keyname])


const person = {
    Name : "shodor uddin",
    job : 'Developer',
    selary :20000,
    age :25,
    "fav place":["coxs-bazar", "saintmartin", "fouslake"]
}

person.job = 35000,
person["fav place"]= ["canada", "USA", "Maldives"]

const jobname ='job'
person[jobname]="Devop"

console.log(person)