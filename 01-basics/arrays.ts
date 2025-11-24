// ** DECLARING AN ARRYA ** //
let nums: number[] = [1,2,34,4];
let nums2: Array<number> = [1,2,22,212];

// ** WITH UNIONS ** // (mixed)
let values: (string | number)[] = ["a",12,'abhijit','bear']


// ** ARRAYS OF SPECIFIC TYPES OTPIONS (not mixed) ** //
let arr : number[] | string [] = [];

// ** TUPLES (fixed length + fixed types) ** //
let user: [string, number] = ['Abhi',23];

// ** Tuples with optional values ** //
let point: [number, number, string?] = [1,2,'abhi'];

// ** READONLY ARRAY ** //
let data: readonly number[] = [1,2,21,22];
// now we can't change the array once declared 