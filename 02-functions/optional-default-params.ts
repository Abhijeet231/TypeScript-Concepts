
type Order = {
    modelName: string
    price: number
}

// A custom type guard function
function isOrderDelivered(obj: any) : obj is Order {
    return (
        typeof obj === "object" &&
        obj !== null && 
       typeof obj.modelName === "string" &&
       typeof obj.price === "number"
    )
}

