const mobile = {
    brand : "Oppo",
    color: "blue",
    camera:'48mpx',
    price:20000,
    isNew: false
}

for (const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}


const keys = Object.keys(mobile);
console.log(keys)

for(const key of keys){
    console.log(key, ":" , mobile[key])
}


const pen={brand : "all-time",price:6}
const pencil=new Object(pen)
console.log(pencil)
const rubber =Object.create(pen)
console.log(rubber)

const myObject = {
    a: 1,
    b: 2,
    c: 3
   };
   
   for (let prop in myObject) {
    console.log(myObject[prop]);
   }

   const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

const str = "Hello";
str[0] = "h";
console.log(str);