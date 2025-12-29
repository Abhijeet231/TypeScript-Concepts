function printLength (value: string | number) {
    if(typeof value === "string") {
        console.log("This is string")
    };
    if(typeof value === "number"){
        console.log("This is number")
    }
}