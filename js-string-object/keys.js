// const computer ={
//     brand : "Dell",
//     price : 60000,
//     processor : 'intel',
//     ssd :'512gb'
// }
// const keys = Object.keys(computer)
// console.log(keys)

// const values=Object.values(computer)
// console.log(values)


const college = {
    name : "NIT",
    class :["computer", "electronics", "textile"],
    events :  ["inovation fair", 'science lav', "21 feb"],
    unique :{
        color : 'Blue',
        result :{
            gpa : 3,
            merit : 'top',
        }
    }
}

// console.log(college)
console.log(college.name)
college.unique.result.merit="top merit"
console.log(college.unique.result.merit)
college.events[2]="16 december"
console.log(college.events[2])
delete college.class
console.log(college)