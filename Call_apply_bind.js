//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, 
//so the prototype will have its own prototype, making what's called a prototype chain.

//apply , call . bind in js 
//problem
let userDetails = {
    name: "paerg",
    Age: 29,
    Designation: "FD",
    peintdetails: function() {
        console.log(this.name);
    }
}

userDetails.peintdetails();

//if we have this function outside of object
let peintdetails2 = function(state, country) {
    console.log(this.name + "," + state, ",", country);
}
peintdetails2.call(userDetails, "surat", "india");

let userDetails2 = {
        name: "fdvd",
        Age: 69,
        Designation: "dD",
    }
    //call
    //it is like borrow function 
    // userDetails.peintdetails.call(userDetails2, "surat");
    //in call method it take indivisual method
peintdetails2.call(userDetails2, "ahmdabad", "india")

peintdetails2.apply(userDetails2, ["deilhi", "indjaa"]);

//bind
//in call we directly call function but in bind we make copy of function or store in variable
const copy = peintdetails2.bind(userDetails2, "cxff", "indiaaaa");
copy();

//With the call() method, you can write a method that can be used on different objects.
//The call() method is a predefined JavaScript method.

//It can be used to invoke (call) a method with an owner object as an argument (parameter).

//With call(), an object can use a method belonging to another object.
//The call() method can accept arguments:

//The apply() method is similar to the call() method (previous chapter).
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.
//Math.max.apply(null, [1,2,3]); // Will also return 3

//With the bind() method, an object can borrow a method from another object.