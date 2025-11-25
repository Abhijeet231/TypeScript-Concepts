// An Abstract class is a class that is meant to be  inherited but can't be instantiated directly.
// It can contain abstract methods that must be implemented by derived classes.


    // You can't do this : 
// const obj = new Animal(); // error if Animal is abstract

// Error: Cannot create an instance of an abstract class.



// ** NORMAL CLASS ** //
class TakePhoto {
    constructor(
        public camera: string,
        public filter: string,
    ){}
};

// now let's create a new object from this class
const img = new TakePhoto('test', 'testcam'); // we can do this but ....
 
// --------------------------------------------------------------------------

// ** ABSTRACT CLASS ** //

// if we make the class abstract we can't do this 
abstract class Photo {
    constructor(
        public image: string,
        public age: number,
    ){}
};

// now if we want to create a new object from this class we can't 

 // const newImg = new Photo('sony', 22); // errror

 class Instagram extends Photo{
    constructor(
         image: string,  // don't use public in inherited child property
         age: number,
        public name: string
    ){
        super(image, age)
    }
 };

 const newSelfie = new Instagram('sony',22, 'abhi'); // now it can be possible , we can do this 



 // --------------------------------------------------------------------------

 // Abstract classes can't create their object on their own but they help to define the class who are inheriting them. 

 // If you want to add some methods which are COMPUlsary needs everywhere, then you can make those methods abstract. 