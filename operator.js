// Arithmetic Operator: + - * / % ++ --
var a = 10;
var b = 4;
console.log(a % b);

// Incremental 
// Pre Incremental - Post Incremental

console.log(a++) // post: a = a + 1
console.log(a);
console.log(++a) // pre

console.log(b--);
console.log(b);
console.log(--b);


// Assignment Operator
var a = 10;
var b = 20;

// a = a + b;
a += b;
console.log(a)

a -= b;
console.log(a)

a *= b;
console.log(a)

a /= b;
console.log(a);

a %= b;
console.log(a);


// Comparison Operators
var a = 10;
var b = 20;

console.log(a == b);
console.log(a != b);

console.log (a > b);
console.log (a < b);

console.log (a <= b);
console.log (a >= b);

var c = 50;
var d = '50';

console.log(c === d); // type check
console.log(c !== d)



// Logical Operators: && || !

// Bitwise Operators: & | ~ ^ << >> used by binary number


// Typeof Operators 
console.log(typeof 10);
console.log(typeof 'adfd');
console.log(typeof true);
console.log(typeof null);

