// Use type for unions, intersections , primitives & complext type composition


// ** COMBINING TYPES ** //

// Types don't use extends - they rely on &
type janwar = {name: string};

type Bhalu = Animal & {honey: boolean}



// INtersections are more flexible - can combine different shapes: 
type Admin = {isAdmin: true};
type user = {name: string};

type AdminUser = Admin & User