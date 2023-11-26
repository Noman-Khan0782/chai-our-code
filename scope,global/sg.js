var b=200;
let a=200

if(true){
    let a=1;//not print this scope
    var b=2;
    const c=3;
    console.log(a);
    // return
    

}
console.log("let value",a);
console.log("var value:",b);//only var work as a global
// console.log(c);
console.log("===================================");

let t=2;

for (let index = 0; index < 11; index++) {
    let f=t*index;
    console.log(t,"X",index,"=",f);
    
}