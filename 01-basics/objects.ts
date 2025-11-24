// ** BASIC OBJECT TYPEING ** //
let user: {name:string; age: number} = {
    name:'Abhi',
    age:23
}
// Properties must match exactly (extra /missing properties cause errors)


// ** OPTIONAL & READONLY PROPERTIES ** //
let person: {
    name: string;
    age?:number;   // optional
    readonly id: number ;
} = {
    name:'Abhi',
    id:101       //we can't change it now ,once declared
}


