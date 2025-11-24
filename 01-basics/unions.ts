// -------------------------------------------
// Unions in Typescript 
// -------------------------------------------

// A Union allows a variable to hold more than 1 possible types.

let id : string | number; 
id = 101;  // number allowed
id= '101'  // string is also allowed

// ** WHY UNIONS ARE IMPORTANT ** //

// APi response - data can be string or number or null

// Form inputs - value can be string or undefined 
 
// Config options - accept multiple types 

// Modern Frontend - Loading 


// ** BASIC EXAMPLES ** // 

let score : number | string = 10;
score = 'ten';


let result : "success" | 'error' | 'loading';
result = 'success'; 
result = 'loading';
console.log(result)


// ** UNION WITH ARRAYS ** // 

let item: number [] | string[];
item = [1,2,3]; // in this case item array can contain only numbers or ONLy Strings
item = ['a','b'];


let mixed : (number | string)[];
mixed = ['abhi',23,'Bpd']


// ** TYPE NARROWING ** //

// When you use unions , you must check types before using them
function printId(id: number | string) {
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id.toFixed(2));
    }
}



// ** UNIONS WITH OBJECTS ** //

type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    name: string;
};

type Person = Admin | User ; 

function handlePerson (p: Person) {
    if(p.role === "admin"){
        console.log("Permissions: ", p.permissions);
    }else{
        console.log("Users:", p.name)
    }
}


// ** DISCRIMINATED UNIONS (MODERN PATTERN) ** //

// very common for APi call and Frontend Ui

type Loading = {status: "loading"};
type Success = {status: "success", data: string};
type Err = {status: "error"; message: string};

type ResponseState = Loading | Success | Err ; 

function showState(state: ResponseState){
    switch(state.status){
        case 'loading':
            console.log("Loading...")
            break;
         
        case "success" : 
              console.log("Data:", state.data);
              break;
        
        case 'error': 
              console.log("Error", state.message);
              break;      
    }
}


// ** Alias ** // 

type Id = string | number ;
let userId : Id = 123;
userId = 'number23'