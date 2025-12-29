// A tuple is a special type of ARRAY with : Fixed length, fixed order & fixed data types in each position.

let user : [number,string] = [1,'Abhi'];

// This means - frist value must be a NUMBER, second vlaue must be a STRING and EXTRA values are NOT ALLOWED.


// ** WHY TUPLES ARE USEFUL ** //

// Returing multiple values - [result,errro]

// Coordinates - [x,y]

// Key-Value pairs - [key,value]

// CSV-like data - [id,name,age]

// React  - const [state, setState] = useState()



// ** OPTIONAL ELEMENTS ** //
let userInfo: [string, number?, boolean? ];
userInfo = ['sam'];
userInfo = ['same',20];
userInfo = ['sam',20,true];


// ** DESTRUCTURING TUPLES ** //
let coordinates: [number,number] = [10,10];
const [x,y] = coordinates;


// ** TUPLES + FUNCTIONS ** //
function getUser(): [string,number] {
    return ["Mark", 30];
}


// NAMED TUPLES (modern Ts)
let product: [id:number, title: string, price: number] = [1,'pen', 12];


// ** TUPLES IN ARRAYS ** //
let users: [number, string] [];  // tuples are arrays but here it is array of tuples
users = [[1,'abhi'], [21,'jeet']]; // an array that contains many tuples 

