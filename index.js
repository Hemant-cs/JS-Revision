//JS Revision

/*
1. Coercion
    coercion stands for type inter conversion
    it has 2 types
    1. Implicit -> when Language do automatically
    2. Explicit -> when you do forcefully
*/

//Implicit

console.log("2" + 2); // 22 -> here number '2' is being converted to string by language

//Explicit

console.log(Number("2") + 2); //4 -> here we are converting string '2' to a number

/*
data type
    A data type in JS define the kind of data a variable can hold.
    it has 2 types
    1. Primitive Data
    2. Non-Primitive Data
*/

/*
primitive Data
    1. Undefined -> undefined
    2. Null -> null
    3. Boolean -> true/false
    4. String -> "Hemant"
    5. Symbol -> Symbol(id)
    6. Number -> 2
    7. BigInt -> 2n
    8. Object -> let name = "Hemant"; console.log(name.toUpperCase());
              -> here name variable will be converted to a object

Non-Primitive Data
    1. Array -> [1, 2, 3, 4]
    2. Object -> {name: "Hemant"}
    3. function -> function getName(name){return name;}
    4. Date -> new Date();
    5. RegExp -> /abc/
    6. Error -> new Error("abc");

List of falsy value
    1. null
    2. undefined
    3. +0
    4. -0
    5. NaN
    5. ""
    6. false
*/

//{} - truthy 

console.log(!{})

/*
Difference between == and ===
    == -> only check value
    === -> checks value and type both

the main difference is 
    abstract equality (==) does coercion if type are not same
    strict equality (===) never does coercion

in JS, NaN is the only primitive value not equal to itSelf
*/

console.log(NaN === NaN); //false

console.log(-0 === 0); //true
console.log(0 === -0); //true

//special Case

console.log(null == undefined); //true
console.log(undefined == null); //true
console.log(typeof null) //object

/*
isNaN

if any thing is not a valid number then it will return NaN

*/

//problem
let a = "10";
let b = "abc";
let c = "Hemant";
let d = 10 - c;

console.log(isNaN(a)); //false
console.log(isNaN(b)); //true
console.log(isNaN(c)); //true
console.log(isNaN(d)); //true

//JavaScript is hybrid language -> means it's complied + interpreted

// test.js -> (compiled) -> byteCode -> (executed)

/*

Boxing
    In JS, Boxing is a pnenomena when it tries to covert any primitive type into Object
    Primitive value are temprorily enpasulated with in object
    
    It has 2 types
    1. Mannual Boxing
    2. Auto Boxing
*/

// console.log(9.toString()); // Error

// e.g
let num = 9;

console.log(num.toString()); "9"

//1. Mannual Boxing
console.log((9).toString()); // "9"

//Auto Boxing
console.log('abc'.toUpperCase()); // "ABC"

/*
Scopes
    In Simple words, where to look for things
    Accessibility of variable, function and object
    it has 3 types
    1. Global Scope
    2. Functional Scope
    3. Block Scope
*/

// global scope
// if any variable or function is present in global scope then it will be accessable
// everyWhere in js file

// functional Scope
// if you have declared any variable using var and inside function then it will
// get functional scope else it will get global scope

// Block scope
// if you are using let and const then it will get scope of enclosing block always
// if-else block
// for block
// while block
// raw block

/*
Lexical Scope
    It's JavaScript mechanism of allocating scope to a variable and function before execuation

Dynamic Scope
    it will resolve scope on run time means execution time

Undefined
    Means you have declared a variable but you didn't assign any value
    but variable is declared

Undeclared
    Means you have declared a variable with empty value


Hoisting
    Its direat conseqence of lexical scope that happens in JS
    due to which access some function or variable before declaring them

    In strict mode auto Globals are prohibited

*/

console.log(printName());

function printName(){
    return "Hi! Hemant";
}

/*
Closures
    It's a property of lexical scoping that help any function to remember there lexical
    scope even through parent function execution is completed

if any function called is completed then it will be removed from call stack.
How actually the variable still persist?
where are they?
    in Heap Memory
    its will be manage a sperate clouser execution context and maintances variable there
        e.g. heap
*/

for (var i = 1; i <= 3; i++) {
    console.log(i);
  setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4

for (var i = 1; i <= 3; i++) {
  (function(x) {
    setTimeout(() => console.log(x), 1000);
  })(i);
}
// Output: 1, 2, 3