const lab1 = require('./lab1');

console.log("NAME :" +lab1.firstName +" "+ lab1.lastName +"\n" +"StudentId : " +lab1.studentId + "\n");

/*Function 1*/
console.log("The sum of the squares of 1,2,3: " +lab1.questionOne([1, 2, 3])); 
console.log("The sum of the squares of 5,3,10: " +lab1.questionOne([5, 3, 10])); 
console.log("The sum of the squares of 2,1,2: " +lab1.questionOne([2, 1, 2]));
console.log("The sum of the squares of 5,10,9: " +lab1.questionOne([5, 10, 9])); 

/*Function 2*/
console.log("\n" + "Fibonacci value of -10: " +lab1.questionTwo(-10));
console.log("Fibonacci value of 1 : " +lab1.questionTwo(1));
console.log("Fibonacci value of 10 : " +lab1.questionTwo(10));


/*Function 3*/
console.log("\n" + "Number of vowels is :" +lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."));

/*Fucntion 4*/
console.log("\n"+"Factorial of -5: " +lab1.questionFour(-5)); 
console.log("Factorial of 0: " +lab1.questionFour(0)); 
console.log("Factorial of 10: " +lab1.questionFour(5)); 

/*OUTPUT

C:\Users\Komal\CS 546> node lab1.test.js
NAME :KOMAL GINWAL
StudentId : 10449929

The sum of the squares of 1,2,3: 14
The sum of the squares of 5,3,10: 134
The sum of the squares of 2,1,2: 9
The sum of the squares of 5,10,9: 206

Fibonacci value of -10: 0
Fibonacci value of 1 : 1
Fibonacci value of 10 : 55

Number of vowels is :196

Factorial of -5: NaN
Factorial of 0: 1
Factorial of 10: 120
*/












