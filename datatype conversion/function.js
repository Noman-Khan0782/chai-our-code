
function khan(){                 //fuction decleration
    console.log("noman");
    console.log("noman");
    console.log("noman");
    console.log("noman");

}
  // khan() //function call
khan // reference of function
// function noman(num1 , num2)
// {
//   mun3=num1+num2
// }
function noman(num1 , num2)
{
   mun3 =num1+num2
   return mun3
  console.log("Noman");//con't print because after return fuction not work

}

noman(2,2)
// console.log(mun3);
// console.log("result",noman(3,6));
// another type of fuction
function malik(username="khan")
{
  // if(username==undefined)//same to !username
  if(!username)
  {
    console.log("please enter the value of username");
    return `My name : ${username}`
  }
  return `Name : ${username}`
 
 
}
// return `My name : ${username}`

// console.log(malik("Noman khan"));//My name : Noman khan
// console.log(malik());//My name : undefined
// ===================================================
function CartAtom1(items)
{
  return items
}
function CartAtom(...items)//... is a rest operator
{
  return items
}
console.log(CartAtom1(1,2,3,4,4));//only print first items
console.log(CartAtom(3,4,5,6,4,));//print all atoms in array
// ==================================================
const user={
  userName:"Noman khan",
  email:"malik@gmail.com",
}

//  function HandleObject(user){
// console.log(`UserName : ${user.userName}, Email : ${user.email}` );
//  }
// HandleObject(user)
function HandleObject(anyobject){
  console.log(`UserName : ${anyobject.userName}, Email : ${anyobject.email}` );
   }
  //  HandleObject(user)
  HandleObject({
    userName:"khan",
    email:"noman@gmail.com"

  })
  console.log("==================================");
  const newArray=[1,2,3,4]
   function print(getarray){
    return getarray[1]
   }console.log(print(newArray));

   