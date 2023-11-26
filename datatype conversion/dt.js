//premitive
//7 stypes, string,number,boolean,null,undefined,BigInt and symbol
const score=100;
const score1=100.3;
const login=false;
const value=null;
let userEmail;
let id=Symbol('123')
let id1=Symbol('123')
console.log(id===id1);
const bignumber=12345646534532424242423;//n convert it into BigInt premitive datatype
console.log(bignumber);

// Reference (Non premetive)
//Array , Object and function  //

const array=["Noman",23,"peshawar"];
// objects are written in{}
{
    name:"noman";
    age:24;
}
let MyObj={
    name2:"noman",
    age2:24,
}
// fuction(){}
const Myfunction= function(){
    console.log("Noman khan");
}
console.log(typeof name2); //output undefined
console.log(typeof Myfunction);//out function or object
console.log(typeof array);//object
console.log(typeof MyObj); //output object

// ======================Heap and stack Memory===================
// Premetive datatype(stack)==>copy of value||  Non premetive (Heap)=>Reference or original value
// example of stack
let myfirstname="Noman"
let mysecondname=myfirstname
mysecondname="Khan"
console.log(myfirstname)
console.log(mysecondname);
// =================object=========


 let userone={
    email:"noman@gmil.com",
    phone:"123345",
 }
//  let usersecond={
//     email:"khan@gmil.com",
//     phone:"128654",
 
//  }
 let usersecond=userone
 usersecond.email="khan@gmail.com"
 
 console.log(userone.email);
 console.log(usersecond.email);
 console.log("==================================");
 let myarray=[1,"khan"];
 console.log(myarray[1]);



