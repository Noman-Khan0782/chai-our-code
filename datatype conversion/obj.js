// singleton
// Object.create
const mysym=Symbol("malik")
const noman={
    name:"noman",
    age:24,
    "last name":"khan",
    email:"malik@gmail.com",
    "city":"peshawar",
    // mysym:"my nane is khan"
     [mysym]:"my nane is khan",
}

// console.log(noman);
// console.log(noman["last name"]);
// console.log(noman.age);
// console.log(noman.name);
// console.log(noman.city);
// console.log(noman["city"]);
// console.log(typeof [mysym]);
//  console.log(typeof mysym);
//  console.log(typeof noman.mysym);
// noman.email="noman@gmail.com"
// console.log(noman);
// Object.freeze(noman)//freez object
// noman.email="khan34@gmail.com"//no changes in email because oblect is freeze 
// console.log(noman);//print old email
noman.khan=function(){
console.log("what is your name");
}
noman.khan1=function(){
    console.log(`what is your name: ${this.name}`);
    console.log(`what is your email: ${this.email}`);

    }
console.log(noman.khan);// print fuction reference [Function (anonymous)]
console.log(noman.khan());//print fuction values
console.log(noman.khan1());//print fuction values



