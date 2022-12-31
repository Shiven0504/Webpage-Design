// 1. ways to print in javascript
console.log("hello world");
alert("me");
document.write("this is a new document")

//2. javascript console API
console.log("hello world",4+6,"another log");
console.warn("this is warning");
console.error("this is an error");

//3. javascript variables
var number1 = 34;
var number2 = 56;
console.log(number1+number2);

//4. datatypes in javascript
var str1 = "this is a string";
var str2 = "this is also a string";
var num1 = 455;
var num2 = 56.76;

var marks = {
    ramesh: 34,
    mukesh: 78,
    shiven: 99.97
}
console.log(marks);

// booleans
var a = true;
var b = false;
console.log(a);
console.log(a,b);

var und = undefined;
console.log(und);
var n = null;
console.log(n);

// arrays
var arr = [1,2,3,4,5]
console.log(arr)
console.log(arr[0])
console.log(arr[4])

var arr = [1,2,"hello",4,5]
console.log(arr[2])
console.log(arr[3])
console.log(arr)

// operators in javascript
// arithmetic operators

var a = 34
var b = 56
console.log("value of a+b is",a+b)
console.log("value of a*b is",a*b)
console.log("value of a-b is ",a-b)
console.log("value of a/b is",a/b)

// assignment operators 
var c = b
console.log(c);
var x = 34
var y = 56
console.log(x==y)
console.log(x>=y)
console.log(x<=y)

// logical operators
//and
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

//or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// logical not
console.log( ! false)
console.log( ! true)

// functions in javascript
function avg(a,b){
    return (a+b)/2;
}
c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1,c2);

function avg(a,b){
    c = (a+b)/2;
    return c;
}

// conditionals in javascript
// if-else statement
var age = 34;
if (age>8){
    console.log('you are not a kid');
}
else {
    console.log('you are a kid')
}

// if-else ladder 
var age = 41;
if (age>32){
    console.log('you are not a kid');
}
else if (age>26){
    console.log('you are not a kid')
}
else if (age>22){
    console.log('you are not a kid');
}
else if (age>18){
    console.log('you are not a kid');
}
else {
    console.log('you are a kid');
}
console.log('end of ladder');

// loops in javascript
 arr.forEach (function(element){
    console.log(element);
})

let j=0
while (j<arr.length){
    console.log(arr[j]);
    j++;
}

do {
    console.log(arr[j]);
    j++;
} while (j<arr.length);

// break and continue statements
var arr = [1,2,3,4,5,6,7]
for (var i=0; i<arr.length; i++){
    if (i==2){
        break;
    }
    console.log(arr[i])
}

// it breaks from the current iteration and comes out from the loop 

var arr = [1,2,3,4,5,6,7]
for (var i=0; i<arr.length; i++){
    if (i==2){
        continue;
    }
    console.log(arr[i])
}

// continue breaks from the current iteration and jumps to the beginning of the loop for the next iteration

// array methods in javascript
let myArr = ["Fan","Camera",34,null,true]
console.log(myArr.length)
myArr.pop()
console.log(myArr)

myArr.push("Shiven")
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.unshift("shiven")
console.log(myArr)
console.log(myArr.unshift("shiven"))

// string methods in javascript
let Mystring = "shiven is a godd boy"
console.log(Mystring.length)
console.log(Mystring.indexOf("shiven"))
console.log(Mystring.indexOf("good"))
console.log(Mystring.slice(0,3))
console.log(Mystring.slice(1,3))

d = Mystring.replace("shiven","ramesh")
console.log(d,Mystring)

// dates in javascript
mydate = new Date();
console.log(mydate);

console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getTime());
console.log(mydate.getMinutes());
console.log(mydate.getHours());

console.log("this is a new document")




