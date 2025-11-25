// NOrmal Class syntax
class User {
    email: string
    name: string 
    
    
    constructor(email: string, name: string){
        this.email = email;
        this.name = name
        
    }
}

const abhi = new User('abhi12@gmail.com', 'Aditi')
 // console.log(abhi)

// ----------------------------------------------------------------------------------------------------
 
// ** MODERN WAY ** //
class Employee {
    constructor(
        public name: string,
        public age: number,
    ){}
}

// -----------------------------------------------------------------------------------------------------

// ** With modifiers + readonly + private ** //
class EmployeeOld {
    constructor(
        public readonly id: number, // accessible but can't changed after initializaion
        public name: string,
        private salary: number,  // only inside classes accessible
        public age: number = 23  
    ){}

   get getSalary(): number{
        return this.salary;
    }
}


let ramu = new EmployeeOld(131, "Ramu Prasad", 50000, 25)
console.log(ramu)

// ------------------------------------------------------------------------------------------------

// ** CLASSES WITH  GETTERS/SETTERS ** //
class EmployeeNew{
    constructor(
        public name: string,
        private _salary: number,
    ){}

     get salary():number {
            return this._salary;
        }

        set salary (amount: number) {  // setters can't have return type and MUST HAVE ONE Parameter or it's a method!
            if(amount < 0) throw new Error ("Invalid salary");
            this._salary = amount
        }
}// GEtters and Setters must have the SAME name if both exist!!

const newEmp = new EmployeeNew("Advit", 20000);
console.log(newEmp.salary); // 20000

newEmp.salary = 60000 // Trigger setter function
// TS & Js use assignment Syntax here becasue these are designed to look like regular properties, even though they are actually methods under the hood.

console.log(newEmp.salary); // 60000


// -----------------------------------------------------------------------------



// ** FINAL  VERSION OF CLASSES ** // 
class AllEmployee {
    constructor(
        public readonly id: number,
        public name: string,
        private _salary: number,
        public age: number = 23 ,  // if you don't pass age it will be 23 and if you do pass it will change 
        public city ?: string,  // this is optional parameter and   OPTIONLA PARAMETER SHOULD BE KEPT AT LAST >
    ){}

    promote(amount: number){
        this._salary += amount;
    }

    get salary (): number {
        return this._salary;
    }

    // we can also have private methods in a class !(only accessable with in the class)
    private deleteToken(){
        console.log('This is a private method')
    }
}

const emp3 = new AllEmployee(101,'Abhijit',500000);
emp3.promote(10000);





// ** learn the difference between PRIVATE and PROTECTED and how it is related to class extends thing.(a new class can extends the old one like normal js )

// when we mark a variable as protected instead of private then we can use that in any other class also which inherits the original class , but we can't do the same with private ..








// ChatGpt response realted to Getters and setters and normal functions inside classes - [ https://chatgpt.com/s/t_692472fac1288191a32eca81b3e4755e ]


// ChatGpt response on when to use extends and implement [ https://chatgpt.com/s/t_692472fac1288191a32eca81b3e4755e ]


// ChatGpt response - relatled to RULES OF USING GETTERS ANd Setters [https://chatgpt.com/s/t_692524510c1c8191a8ad01ec21649b8a]