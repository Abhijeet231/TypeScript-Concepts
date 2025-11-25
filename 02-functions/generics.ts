

// ** Normal Function ** //
function identityOne(val: boolean | string): boolean | string {
    return val; // now here i have to do type narrowing 
}

// ** FUNCTION WITH ANY ** //
function identity (val: any): any {
    return val; // this is not recommended , because it can take number and return string which is a problem
}


// ** FUNCTION WITH GENERICS ** //

function identityTwo <Type> (val: Type): Type {
    return val  // this is how we use Generic 
}

identityTwo(3); // now the output will be also same type (number)


// ** MODERN SYNTAX OF GENERICS ** // 

function identifyThree <T> (val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identifyThree <Bottle> ({
    brand: "coca cola",
    type: 1
})










// ChatGpt Resonse on Generics - [https://chatgpt.com/s/t_6925535bd4cc8191938220c5147a4e0f]

// ChatGpt response on - Union & Type Narrowing vs Generics and the difference between these [https://chatgpt.com/s/t_6925566929dc8191a12c265d72571e40]

// Yt - source - freecodecamp yt channel video By Hitesh Choudhary 