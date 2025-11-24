
//  TypeScript type names are always lowercase: number, string, boolean, object, etc.

//  Try to avoid `any` unless required — it disables type checking.

//  Use `unknown` when the type is uncertain but you still want safety.




// -------------------------------------------
// Variables & Basic Types in TypeScript
// -------------------------------------------


// NUMBER
let age: number = 21;
let price: number = 149.99;

// STRING
let username: string = "John Doe";
let greeting: string = `Hello, ${username}!`;

// BOOLEAN
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

// NULL
let emptyValue: null = null;

// UNDEFINED
let notAssigned: undefined = undefined;

// VOID (usually used as return type of functions) 
function logMessage(msg: string): void {
    console.log(msg);
}
// void used when a function performs action like logging, updating a variable etc. 

// OBJECT
let person: { name: string; age: number } = {
    name: "Alice",
    age: 25
};


// ARRAY
let numbers: number[] = [1, 2, 3, 4];
let fruits: Array<string> = ["apple", "banana", "orange"]; // alternative syntax


// TUPLES (fixed order & fixed type)
let userData: [number, string, boolean] = [1, "Alex", true];

// NEVER (represents something that never returns)
function throwError(message: string): never {
    throw new Error(message); // never reaches end
}


// UNKNOWN (safer version of 'any')
let data: unknown = "Hello";
data = 55;
data = true;
// console.log(data.toUpperCase()); ❌ not allowed directly
if (typeof data === "string") {
    console.log(data.toUpperCase()); // ✔️ safe check required
}


// ANY (not recommended, but important to know)
let randomValue: any = "Hello";
randomValue = 999;
randomValue = { x: 10 }; // no type safety
