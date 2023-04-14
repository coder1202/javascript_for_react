// function fruits() {
//     //so here is hositing problem can not access 'a2' before initialization
//     console.log(a1);
//     console.log(a2);
//     var a1 = "rg";
//     let a2 = "pqttt";
// }
// fruits();


//2
//here is use var and it is global scope so output is  3 3 3  
//var is global scope so the value is same in every time we console log
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);

//     //if we want 0,1,2 just add perathease it is self invoked function iife imagiate invoked function expresion
//     setTimeout(function() {
//         console.log(i);
//     }(), 1000 + i);
// }


//here is use let and it is block scope so output is  0,1,2
//so every time settimeout run it produce diffrence value 
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1)
// }

//1
//memory allocation is diffrent so array is false
// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);

//2
//so the memory allocation is sane in this case so output is true 
// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);

//3
//so here compare the value of element
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

//4
//so here spred operator conver array into string
// let z = [1,2,3,4];
// let a ={name:"part"};
// console.log(...z);

//5
// NaN means not a number
//NaN type of is number
// console.log(typeof NaN);

//6
//output is 20
// let data = 10 - -10;
// console.log(data);

//7
//it is unique value it remove duplicate element automaticallly  so output is 1,2,3,4
// const set = new Set([1, 1, 2, 3, 4]);
// console.log(set);

//8
//sucessfull delete so it return true 
// let data = { name: "parth" };
// console.log(delete data.name);
//it return {} because object is blank
// console.log(data);

//9
//so basically we dont delete object directly we only delete object  element so output is false
// const daya = { name: "parth" };
// console.log(delete daya);
// console.log(daya);

//9
//so hehre output is parth and  yash because it take first two value
// const data = ["parth", "yash", "you"];
// const [y, z] = data;
// console.log(y, z);

//10
//only want second value so include , only 
//output yash
// const data = ["parth", "yash", "you"];
// const [, y] = data;
// console.log(y);

//11
//how we get namee without . operator 
// const data = { namee: "parth", age: 48, skill: "hj" };
// const { age } = data;
// console.log(age);

//12
//merge object 
// let data = { name: "parth", age: 28, skils: "gh" };
// let info = { city: "Noida", mail: "parth@gmail.com" };
// data = {...data, ...info };
// console.log(data);
// console.log(data.name);

//13
//data e aek object ni rite print thase and info string ni rite bcoz spred operstor convert kri de
// let data = { name: "parth", age: 28, skils: "gh" };
// let info = { city: "Noida", mail: "parth@gmail.com" };
// data = { data, ...info };
// console.log(data);

//14
//so here skill is in both field so output is like skills:php  take same key and give output of second value
// let data = { name: "parth", age: 28, skils: "gh" };
// let info = { city: "Noida", skils: "php" };
// data1 = {...data, ...info };
// console.log(data1);

//15
//name is not a function
// const name = "parth";
// console.log(name());

//16
//|| means order
//and when we use or operator first it take positive value
//so its return object and empty object have positive value
// const result = false || {} || null;
// console.log(result);

//17
//so here empty string not contain postive value
//but if or operator does'nt find positive value it take last value so the output is empty string
// const result = null || false || "";
// console.log(result);

//18
// array is also like [] object it is positive value
// const result = [] || 0 || true;
// console.log(result);

//19
//so its return promise fullfiled when we do resolve its already have promise
// console.log(Promise.resolve(5));

//20
//true
//so emoji have unique code behind it 
// console.log('❤️' === '❤️');

//21
//it convert JSON to a javascript Value
//JSON.parse();

//22
//error cannot access name before initialization 
// let name = "sidhu";

// function getname() {
//     console.log(name);
//     let name = "anil";
// }
// getname();

//23
//let have block scope 
//we use use name inside function so output is parth
// const name = "parth";

// function getName() {
//     console.log(name);
// }
// getName();

//24
//output i love to program
// console.log(`${(x=>x)('I love ')} to program`);

//25
//output should be 6
// function sum(x, y, z) {
//     return x + y + z
// }
// console.log(sum(1, 2, 3));
// console.log(sum(...[1, 2, 3]));

//26
//output of this is false !typeof name so when we compare it with string and object is false so output is fontVariantAlternates
//and third console is true because false ,false is become true 
// const name = "Code step by step"
// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');
// console.log(!typeof name === false);

//27
//undhu che name e number nthi to true return krse
// age number che to false return krse
// const name = "mame";
// const age = 21;
// console.log(isNaN(name));
// console.log(isNaN(age));

//28
//when we put object.seal we dont add other value like in this object age ,place etc 
// but we modify the value of element
// let person = { name: "parth" };
//what can modify person object
// Object.seal(person);
// person.name = "parthh"
// console.log(person);

//29
// let data = [2, 4, 5, 6, 7];
//remove first element
// data.shift();
// console.log(data);

//30
// first ma add krvu hoi to unshift
// last ma add krvu hoi to push
//first element remove krvu hoi to shift
//remove last element of data array   pop
// let data = [2, 9, 0, 10];
// data.pop(6);
// console.log(data);

//31
// let a = 30;
// console.log(a % 2);
// if (a % 2) {
//     console.log("value is even");
// } else {
//     console.log("value is odd");
// }

//32
//return empty object as it delete name element
// let data = { name: "parth" };
// delete data.name;
// console.log(data);

//33
//convert data to boolean false value 
// const data = "parth";
// console.log(!typeof data);

//34
//convert data to boolean true value
// let data = "dgg ";
// console.log(!!data);

//35
//what is diffrence between map and foreach function
//map always return someting but foreach not return anything

//36 
// output ['of' , [empty] , 'ef'];
//when array mathi koi element delete krvi aetle e empty space kri de 
// let data = ["of", "ff", "ef"];
// delete data[1];
// console.log(data);

//37
//element delete krvi 6avi but space to che aetle output 3 aavse
// let data = ["parth", "yash", "dfigvj"];
// delete data[1];
// console.log(data.length);

//37
// let a = [1, 2, 3];
// let b = [4, 5, 6, ];
// let c = [...a, ...b];
// console.log(c);
// const abc = a.concat(b);
// console.log(abc);

//find min  and max of error
// a = [5, 2, 8, 6, 9, 1];
// const avc = a.sort(function(a, b) {
//     return a - b;
// });
// console.log(avc[avc.length - 1]);

// const points = [40, 100, 1, 5, 25, 10];
// const abc = points.sort(function(a, b) { return a - b });
// console.log(abc[abc.length - 1]);

//37
//aek object ni under two same value no hoi shake but array under hoi shake
//output 1,2,3,4,4,5,6,7
// let a = [1, 2, 3, 4];
// let b = [4, 5, 6, 7];
// console.log(...a, ...b);

//38 
//output 27    3 no square 3
// let c = 3 ** 3;
// console.log(c);

//39
//settimeout  e bdha function last ma run thay i mean pela a =2 thase pchi a=100 aetle value change thy jai aetle output 100 aave
// let a = 2;
// setTimeout(() => {
//     console.log(a);
// }, 0);
// a = 100;

//40
//javascript is case sensitive
// let a = 2;
// let A = 30;
// console.log(A);

//41
// let A10 = "like";
//variable ne start number thi no thay
//let 10A="ldlkd";
// console.log(A10);

//42
//output true 
// let a = "like";
// let b = 'like';
// console.log(a === b);

//43 -- thyu aetle 1 minus thy gyu aetle result 2 aaviyu
// let a = 1;
// let c = 2;
// console.log(--c === a);

//44
// a===b nu output true aaviyu so true --c    to aanu output false aavse bcoz ae true and numberic valur ne copare kre che 
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c);

//45
// console.log(3 * 3);
// console.log(3 ** 3);
// console.log(3 ** 3);

//46
// console.log(a);
// var a;

//47
//variable not define 
//variable not define means we not define the variable and undefine means we define but not give value
// console.log(b);

//48
//array define kri ne dese nested  || last array ma 0 malse  baki bdha ma 1.
// console.log([
//     [
//         [
//             []
//         ]
//     ]
// ]);

//49
//how to find os name
//in console  have navigator.plateform

//50
//for is reserved keyword so dont use it 
// let for =50;

//51
// function fruits() {
//     //undefine
//     console.log(name);
//     //can not access price before initialization
//     console.log(price);
//     var name = "apple";
//     let price = 20;
// }
// fruits();

//52
//output 3 3 3
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i), 1;
//     })
// }

//53
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i), 1;
//     })
// }

//54
//1  koi variable aagal + lagavathi +1 thy jai
// console.log(+true);
// //number
// console.log(typeof + true);

//55
//false
// console.log(!"anil");
// //string
// console.log(typeof("anil"));

//56
// let data = "size";
// const bird = { size: "small" };
// //square bracket ma use kri shakvi 
// //small
// console.log(bird[data]);
// //small
// console.log(bird["size"]);
// //small
// console.log(bird.size);
// //undefine
// console.log(bird.data);

//57
//output anil
// let c = { name: "parth" };
// let d;
// d = c;
// c.name = "anil";
// console.log(d.name);

//58 output 10
// var x;
// var x = 10;
// console.log(x);

//59
//var ne declare kri shakvi but let ne nyy
//error x is already declare
// var x;
// let x = 10;
// console.log(x);

//60
//it is variable
// let a = 3;
//and it is now become object
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);

//61
// let name;
// namme = {};
// undefine
// console.log(name);
// // {}
// console.log(namme);

//62
// function abc() {
//     console.log("parth");
// }
// //so its not effect our program output
// abc.name = "dfff";
// abc();

//63
// output 12
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, "2"));

//64
// let num = 0;
// //ahiya pela 0 print thase pchi ++ thase aetle 1 value thase and output o
// console.log(num++);
// //pchi ahiya 1+1 aetle 2
// console.log(++num);
// //ahiya 2 aavse
// console.log(num);

//65
//javascript array koi dives object na hoi aetle object aaviyu
//spred operator no typeof object hoi 
// function getAge(...age) {
//     console.log(typeof age);
// }
// getAge(21);

// function getAge() {
//     'use strict'
//     age = 21;
//     console.log(age);
// }
// getAge();

//p1
// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v);
//         return v * 2;
//     })
//      .then(v => {
//          console.log(v);
//      });


//p2
//so aa question ma hamesh settime out interval wala function last ma run thay 
//so pela bar che e run thase pchi promise wala pchi last ma set time out wala
// setTimeout(function() {
//     console.log(1);
// }, 0);

// console.log(2);

// Promise.resolve().then(() => {
//     console.log(3)
// })
// setTimeout(function() {
//     console.log(4);
// }, 0);

// console.log(5);

//p3
//so aama pela 3>2 compare thay e true aave pchi true>1 aetle boolean ae number sathe compare na thay so fontVariantAlternates: 
// console.log(3 > 2 > 1);

//so here + so it is used to concat in string so output is 21
// console.log("2" + 1);

//so here - is like - operator
// console.log("2" - 1);

//output 02    
// console.log(1 + -"1" + "2");

//p4
//accidently global scope
// function foo() {
//     //var a,b hot to bey undefine aave
//     //ahya a=b=0 lidhu che so b ae accidently global variable thy gyo
//     var a = b = 0;
//     a++;
//     return a;
// }
// foo();
// //aa undefine aaviyu bcoz aapde function ni under no variable bar use no kri shakvi
// //bar declare hoi to under use kri shakvi 
// //undefine
// console.log(typeof a);
// //number
// console.log(typeof b);

//p5
//the foundation of website 
//https is protocol medium for  server or used for interact with server
//here for https so for that we have ssl certificate
//domain and .com or .in is extension 
//and /page is path so basicaly if i type /page then it send req to server that used want this path or pageBreakAfter: 

//undefine || not declare means define nahi hai
// not define means we declare varible but not give value
//null is assigment value just like i declare it but use it into feature 
//var a = null;
//var a ={name:"parth",age:"null"};

//p6
//cheack the valid palindrome
//first cheack stirng palindrome
//empty string is palandrom
// let a = "gig";
// let reverse = "";

// if (a[0] == a[a.length - 1]) {

//     for (let i = 0; i < a.length; i++) {
//         //a[i] means k 
//         reverse = a[i] + reverse;
//     }
//     if (a === reverse) {
//         console.log("string is palindrome");
//     } else {
//         console.log("String is not palindrome");
//     }
// } else {
//     console.log("String is not palindrom(Rejected)");
// }

//p7
//implicit and explicit binding 
var obj = {
    name: "piyush",
    display: function() {
        console.log(this.name);
    },
}
var obj1 = { name: "ABC" };
obj.display.call(obj1)

//2nd
//undefine output of outside of function
//let name = "ffr";
//so in arrow function it gives us empty console log
//if only have this in arrow function than our output is global or window object
//so in global object we dont have name object or var
// var ob = {
//     name: "piyush",
//     display: () => {
//         console.log(this.name);
//     },
// }
// var ob1 = { name: "ABC" };

// ob.display.call(ob1)

//p8
//caching and memorized function
// function muMemoize(fn, context) {
//     const res = {};
//     return function(...args) {
//         var argsCache = JSON.stringify(args);
//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args);
//         }
//         return res[argsCache];
//     };
// }

// const clumsyproduct = (num1, num2) => {
//     for (let i = 1; i <= 10000000; i++) {

//     }
//     return num1 * num2;
// };
// const memoizedclumzyproduct = muMemoize(clumsyproduct);
// console.time("first call");
// console.log(memoizedclumzyproduct(9467, 7649));
// console.timeEnd("first call");

// console.time("second call");
// console.log(memoizedclumzyproduct(9467, 7649));
// console.timeEnd("second call");

//infinite currying p9
// p9 output is 19
// function add(a) {
//     return function(b) {
//         if (b) return add(a + b);
//         return a;
//     };
// }
// console.log(add(5)(2)(4)(8)());

//qu
const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(b) {
        this.total *= b;
        return this;

    },
    substract(c) {
        this.total -= c;
        return this;
    },

}
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);