// An Enum is a way to define a set of named constant values. 
// Enums make code readable and reduce errors caused by using raw string or numbers directly.

// ** NUMBERIC ENUMS ** //

 enum Role {
    User, // 0
    Admin, // 1 
    SuperAdmin // 2
}

console.log(Role.Admin); // 1

// You can set the starting number.
enum Status {
    Pending = 5,
    Approved , // now it will automaticaly 6 
    Rejected    // now it will automatically become 7
}

console.log(Status.Rejected); // 7


// ** STRING ENUMS ** // 
enum Direction { 
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Left); // LEFT


// ** REVERSE MAPPING ** //
enum Color {
    Red,
    Green
}

console.log(Color.Red); // 0
console.log(Color[0]); // "RED"
// String enums don't support reverse lookup, they will throw undefined


// ** CONST ENUMS ** // (optimised for runtime performance) 
const enum Size {
    Small,
    Medium,
    Large
}

let s = Size.Medium;


