
const hello1 = require("./stringUtils");
const hello2 = require("./objUtils");

const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };


console.log("\nSTRING FUNCTIONS");
try {
    // Sucessful Test Case
    console.log("1. Passed Test Case : foobar " + hello1.capitalize("foobar") + " " + hello1.capitalize("FOOBAR"));
    console.log('=> Capitalize Passed');
 } catch (e) {
    console.error(e);
 }
 try {
    //Failed Test Case
    console.log("\nFailed Test Case 1.  " + hello1.capitalize(123) + " 2. " + hello1.capitalize(""));
    console.log('=> Capitalize Failed');
 } catch (e) {
    console.error(e);
 }

 try {
    // Sucessful Test Case
    console.log("\n1. Passed Test Case : repeat(abc,3) " + hello1.repeat("abc",3)+ " 2. repeat(abc,0)" + hello1.repeat("abc",0));
    console.log('=> Repeat Passed');
 } catch (err) {
    console.error(err);
 }
 try {
    //Failed Test Case
    console.log("\nFailed Test Case 1. " + hello1.repeat("abc",-5) + " 2. " + hello1.repeat(123,6));
    console.log('=> Repeat Failed');
 } catch (e) {
    console.error(e);
 }

 console.log("OBJECT FUNCTIONS")
 try {
    // Sucessful Test Case
    console.log(hello2.mapValues({ 'a': 1, 'b': 2, 'c': 3 }, function(value) {
        return value +1;}));
    console.log('=> Map Values function passed');
 } catch (err) {
    console.error(err);
 }
 try {
    //Failed Test Case
    console.log("\n1.  " + hello2.mapValues(123, function(value) {return value +1;}) + "  2. "+ hello2.mapValues({ 'a': 1, 'b': 2, 'c': 3 },123) );
    console.log('=> Map Values function  Failed');
 } catch (e) {
    console.error(e);
 }

 
 try {
    // Sucessful Test Case
    console.log("\nFirstSecondThird");
    console.log(hello2.smush(first, second, third))
    console.log('=> Smush Function passed');
 } catch (e) {
    console.error(e);
 }
 try {
    //Failed Test Case
    console.log("\n 1. " + hello2.smush("komal") + " 2. "+ hello2.smush(first));
    console.log('Smush function  Failed');
 } catch (e) {
    console.error(e);
 }

 
