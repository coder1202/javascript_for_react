//Primitive data types are number, string, boolean, NULL, Infinity and symbol. Non-primitive data types is the 
//object. The JavaScript arrays and functions are also objects. For more check out this web developer course online.

//The fundamental difference between primitives and non-primitive is that primitives are immutable and non-primitive are mutable .

//JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

//You should use objects when you want the element names to be strings (text). You should use arrays when you want the
// element names to be numbers.
const object1 = {
    name: "parth",
    ages: 12,
    //nested object
    marks: {
        science: 70,
        math: 75
    },
    //function
    namedd: function() {
        console.log("fsefs");
    },
}
console.log(object1.namedd());