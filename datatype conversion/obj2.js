// objects
const tenderUser=new Object()//singleton object
const tenderUser1={}//not a singleton object
console.log(tenderUser);//out put empty object
console.log(tenderUser1);//out put empty object

tenderUser.id="1234"
tenderUser.name="Noman"
tenderUser.login=false
// console.log(tenderUser);//not empty because in JS line by line execusion

const otheruser={
    email:"noman@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Noman",
            lastname:"Khan"
        }

    }
}
// console.log("=====================================");
// console.log(otheruser);
// console.log("=====================================");
// console.log(otheruser.email);
// console.log("=====================================");
// console.log(otheruser.fullName);
// console.log("=====================================");
// console.log(otheruser.fullName.userFullName.firstName);
// console.log("=====================================");
// console.log(otheruser.fullName.userFullName.lastname);

// console.log(otheruser.fullName.usersFullName?.lastname);

const obj1={a:"1",b:"2"}
const obj2={c:"3",d:"4"}
// const obj3={obj1,obj2}
// console.log(obj3);//output:{ obj1: { a: '1', b: '2' }, obj2: { c: '3', d: '4' } }
console.log("================================");
const obj4={e:"1",f:"2"}
const obj5={g:"3",h:"4"}
// const obj6=Object.assign(obj4,obj5)
// console.log(obj6);//output :{ a: '1', b: '2', c: '3', d: '4' }
console.log("================================");
const obj7=Object.assign({},obj4,obj5,obj1,obj2)
// console.log(obj7);
const obj8={...obj1,...obj2}
// console.log(obj8);//{ a: '1', b: '2', c: '3', d: '4' }

const array=[
    {
        id:"1",
        name:"sami"
    },
    {
        email:"khan@gmail.com",
        name:"yaseen"
    }
]
// console.log(array[1].email);//output: khan@gmail.com
// console.log(array[0].name);//output: sami
// console.log("===========================");
// console.log(tenderUser);
// console.log(Object.keys(tenderUser));//output: [ 'id', 'name', 'login' ]
// console.log("===========================");
// console.log(Object.values(tenderUser));//output:[ '1234', 'Noman', false ]
// console.log("============================");
// console.log(Object.entries(tenderUser));//output in array form:[ [ 'id', '1234' ], [ 'name', 'Noman' ], [ 'login', false ] ]

const course={
    courseName:"english",
    price:900,
    courseInstructor:"noman"
}
// console.log(course);
// console.log(course.courseInstructor);
const{courseInstructor:instructor}=course //destructure the value
console.log(instructor);



