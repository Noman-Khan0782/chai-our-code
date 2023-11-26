    //Date

let mydate=new Date()
{
// console.log(mydate);//output :2023-11-17T12:03:54.671Z
// //conver to string
// console.log(mydate.toString());// output :Fri Nov 17 2023 17:03:54 GMT+0500 (Pakistan Standard Time)

// console.log(mydate.toDateString());//Fri Nov 17 2023

// console.log(mydate.toLocaleString());//11/17/2023, 5:07:34 PM
// console.log(typeof mydate);// the type of date is object

}
// let newdate=new Date(2023,10,17)//year/months strat from zero/date
// {
//     console.log(newdate);
//     console.log(newdate.toDateString());
// }
// let newdate=new Date(2023,10,17,3,5,4) //year/months strat from zero/day/hours/min/sec{
//     console.log(newdate.toLocaleString());

    let newdate=new Date("01-11-2023")//DD/MM/YY 
    // console.log(newdate.toLocaleString());
    let TimeStamp=Date.now()
    console.log(TimeStamp);
    console.log(newdate.getTime());
    console.log(Math.floor(Date.now()/1000) );
    