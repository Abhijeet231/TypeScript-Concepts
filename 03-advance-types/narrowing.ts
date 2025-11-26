// Type Narrowing means: when a variable has multiple possible types , you write logic that narrows it to one specific type, so TypeScript knows exactly what you're working with.


// ** WHAT IS "in" narrowing ** //
//When you have objects with different shapes and you want to check if a certain property exists in the object , you can use the in operator to narrow the type. 

// ----------------------------------------------------------------------------------------------------------------------------------------
// ** typeof NARROWING ** //
//works on primitive values : "string", "number","boolean" , "bigint", "symbol","object","function","undefined" 

function printId (id: string | number){
    if(typeof id === 'string'){
        console.log(id.toLowerCase());
    }else {
        console.log(id.toFixed(2));
    }
}
     
//----------------------------------------------------------------------------------------------------------------------------------------

// ** instanceof NARROWING ** //
//used for class instances/built-in objects 

class Dog {bark(){}}
class Cat {meow(){}}

function speak (animal: Dog | Cat) {
    if(animal instanceof Dog) {
        animal.bark();
    }else {
        animal.meow();
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------

// ** THE "in" OPERATOR NARROWING ** //
// Used for detecting object property existence:

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function move (animal: Fish | Bird) {
    if("swim" in animal){
        animal.swim();
    }else {
        animal.fly();
    }
}


// ** "in" OPERATOR EXAMPLE ** //

interface Agent {
    name: string,
    email: string
}

interface Owner {
    name: string,
    email: string,
    isAdmin: boolean
}

function isOwner (account: Agent | Owner) {
    if("isAdmin" in account){
        return account.isAdmin
    }
}




/**
 * SUMMARY
 * -------
 * 🔹 Narrowing help{
 * s TypeScript identify the exact type at runtime
 * 🔹 Use checks (typeof, instanceof, "in", etc.) to control the code path
 * 🔹 Leads to safer & more predictable TypeScript code
 */