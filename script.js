var phrase = "To be or not to be";
var age = 25;
var gpa = 3.1;
var isMale = false; // Boolean
var flaws = null;
var description = undefined;

document.write("<h2 style='color:green;'>Javascript rules!</h2>");
document.write("<hr/>");

document.write(phrase + "<br>");
document.write(age + "<br>");
phrase = "Apple";
document.write(gpa + "<br>");
document.write(isMale + "<br>");
document.write(flaws + "<br>");
phrase = "Orange";
document.write(description + "<br>");
document.write("Length: " + phrase.length + "<br>");
document.write("Uppercase: " + phrase.toUpperCase() + "<br>");
document.write("Char at 2: " + phrase.charAt(2) + "<br>");
document.write("Index of 'r': " + phrase.indexOf("r") + "<br>");
document.write("Substring (0,3): " + phrase.substring(0, 3) + "<br>");
document.write("Sum: " + (2 + 2) + "<br>");
var number = -6;
document.write ( Math.abs(number) + "<br>");
document.write ( Math.pow(number, 4) + "<br>");
document.write ( Math.round(Math.random() * 10) + "<br>");
// getting user input
var name = window.prompt ("What is ur name?");
var age = window.prompt ("How old are you?");
document.write ( "Hey " + name + ", How are you?" + "<br>");
document.write ( "Do you like being " + age + " years old ? " + "<br>");
//a basic calc
var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");

num1 = parseFloat (num1);
num2 = parseFloat (num2);

document.write(num1 + num2 + "<br>");

var fruits = ["Apples", "Oranges", "Peaches"];  
document.write(fruits + "<br>");  

document.write(fruits.length + "<br>");  

var fruitString = fruits.join(","); 
var newFruits = fruitString.split(","); 

document.write(newFruits[2]);  
document.body.innerHTML("hey");
document.write(phrase + "<br>");

