// let book=new Array("math","phy","chem","bio","sst");

let book=["math","phy","chem","sst","bio"];
book[2]="eng";

console.log(book[2]);
console.log(book.length);     //to get the full length

let add=book.push("hindi"); //to add some thing in array
console.log(book);

let remove=book.pop();     //to removing the last element from array
console.log(book);

let shft=book.shift();      // remeoving first element from array
console.log(book);

let delet = book.splice(0,2);     //to remove the element from mid in array by index
console.log(book);

book=[];                 // to empty the array
console.log(book);


let bookn=["math","phy","chem","sst","bio"];
let position=bookn.indexOf("sst");           // to get the position of 
console.log(position);

console.log(Array.isArray(book));          //cheaking element is array or not


let text="The quick brown fox jumps over the lazy dog";
let word=text.split(' ');              // convert string into array
console.log(word);

let addy=word.push("in jungle");       //to add element in array
console.log(word);

let joiny=word.join(' ');           //to join all the array in string
console.log(joiny);

let word2=["too","much","scary"];
let word3=["how","can","we","escape"];
let newbook=word.concat(word2,word3);          // to add two elements by concate the method
console.log(newbook);


let bookwithpage=[
    ["maths","300"],
    ["phy","400"],
    ["bio","500"]
];                                                // multidimesional array

console.log(bookwithpage[2][1]);


let bookm=["maths","phy","bio","compsci"];
let bookis=bookm.length;

for(i=0; i<bookis; i++){
    console.log(`Element${i} is ${bookn[i]}`);         //array in for loop
}

console.log(bookm);
// console.log(bookm.sort());
let bookmk=["kiwi","banana","apple","mango","custard"];
console.log(bookmk);
bookmk.sort();                             //sort array string
console.log(bookmk);
bookmk.reverse();                         // reverse array string
console.log(bookmk);



let a=[45,89,23,19,33,56];

function sortnum(a,b){                   //sort array by compare function (number)
    return a-b;
}
a.sort(sortnum);
console.log(a);


function revnum(a,b){                        //reverse array by compare function (number)
    return b-a;
}
a.reverse(revnum);
console.log(a);


function maptest(x){                          // map method
    return x*5;
}
let b=a.map(maptest);
console.log(b);


let arr=[2,7,9,10,24,53,28,20];                      //map arrow function
let arr1=arr.map((val)=>val*10);
console.log(arr1);


function iseven(value){                        // filter method
    return value%2==0;
}
let even=a.filter(iseven);
console.log(even);