// Use Interface for Object Structures/ classes

interface User {
    name: string;
    age: number;
}

function userDetails (usr: User): string {
    console.log(`UserName is : ${usr.name}. Age is : ${usr.age}`)
    return 'hellow' + usr.name
}

 // console.log(userDetails({name: 'Abhijit', age: 69}))

//--------------------------------------------------------------------------------------------------------------------------------------

 // ** EXTENDING AN INTERFACE ** //
 interface agent {
    name: string;
 }

 interface deliveryAgent extends agent {
    orgName: string;
    id: number
 }

 function getAgentDetail():deliveryAgent {
    return{
        name: "Mahesh",
        orgName: "swiggy",
        id: 21391
    };
 }

 const swiggy12 = getAgentDetail();
 console.log(swiggy12.name)


 // ** Example Two **//
 interface Animal {
   name: string;
 }

 interface Bear extends Animal {
   honey: boolean;
 }

 const bear : Bear = {
       name: "pooh",
       honey: true
 }

 //-----------------------------------------------------------------------------------------------------------------------------------

 // ** EXTENDING MULTIPLE INTERFACE ** // 
interface Person { name: string }
interface Employee { employeeId: number }

interface Manager extends Person, Employee {
  department: string;
}

//--------------------------------------------------------------------------------------------------------------------------------------


 // ** ADDING NEW FILEDS TO AN EXISTING INTERFACE ** // 
 interface System {
    title: string;
 }

 interface System {
    user: string;
 }

 const useer: System = {title:'mytitle', user:'myuser'};
 

 // ------------------------------------------------------------------------------------------------------------------------------------

 //** OPTIONAL (?) vs READONLY (readonly) PROPERTIES */
 interface Userr {
   readonly id: string;
   name: string;
   aayu ?: number;
 }

 const usr: Userr = {id: '124', name: "Abhimanyu"};