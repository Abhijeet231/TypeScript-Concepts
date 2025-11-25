// Type Narrowing means: when a variable has multiple possible types , you write logic that narrows it to one specific type, so TypeScript knows exactly what you're working with.


// ** WHAT IS "in" narrowing ** //
//When you have objects with different shapes and you want to check if a certain property exists in the object , you can use the in operator to narrow the type. 

type User = {name: string};
type Admin = {name: string; role: string};

function printInfo(person: User | Admin) {
    if("role" in person){
        //Person is Admin here
        console.log("Admin ROLE: ", person.role);
    }else {
        // Person is user here
        console.log("User:", person.name);
    }
}








/**
 * SUMMARY
 * -------
 * 🔹 Narrowing helps TypeScript identify the exact type at runtime
 * 🔹 Use checks (typeof, instanceof, "in", etc.) to control the code path
 * 🔹 Leads to safer & more predictable TypeScript code
 */