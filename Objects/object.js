let person={
    detl1:{ name:"rajat jha", age:28, address:"madhupur"},
 detl2:{name:"rajan jha", age:22, address:"madhupur"},
 detl3:{   name:"mukesh jha", age:38, address:"madhupur"},
 detl4:{   name:"amod jha", age:40, address:"madhupur"}
    
};

for(let key in person){
    console.log(person[key].name)
}

console.log(person.detl1);
console.log(person.detl3["name"]);

person.detl1.name="ladoo";          //to modify in an object
console.log(person.detl1);

delete person.detl2.age;              // to delete something in an object
console.log(person.detl2);

console.log(person.detl3);

for(let key in person.detl1){
    console.log(key +" "+person["detl1"]);
}




//           array in object

// let student=[
//     {name:"harsish", age:25, class:5 },
//     {name:"vikash", age:23, class:3 },
//     {name:"babloo", age:12, class:1 },
//     {name:"gautam", age:35, class:5 },
//     {name:"namish", age:25, class:8 }
// ];

// for(let i=0; i<student.length;i++){
//     console.log(student[i]);
// }



let student=[
    {name:"harsish", age:25, class:5 },
    {name:"vikash", age:23, class:3 },
   {name:"babloo", age:12, class:1 },
    {name:"gautam", age:35, class:5 },
    {name:"namish", age:25, class:8 }
];

for(let i=0; i<student.length;i++){
    console.log(student[i].name);
    console.log(student[i].age);

}


let obj = {
    name: "ajay",
    age: 22,
}

let nameKey = "name"

console.log(obj[nameKey])
console.log(obj["name"])
