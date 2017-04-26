 // function add (a, b) {
 //   return a + b;
 // };
 //
 // console.log(add(1, 5));
 //
 // var toAdd = [9, 5];
 // console.log(add(...toAdd));
//
// var groupA = ['Fred', 'Diane'];
// var groupB = ['Lex'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);



var person = ['Fred', 83];
var person1 = ['Diane', 84];
 function greet (name, age) {
 console.log('Hi, ' + name +'. You are ' + age +'.');
 }
 greet(...person);
 greet(...person1);
// };
var names = ['Rob', 'Lex'];
var final = [...names, 'Rent'];

final.forEach(function(name) {
    console.log('Hello, ' + name);
});
