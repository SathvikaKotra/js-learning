/*var phrase = "To be or not to be";
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

function sayHi(){
    document.write("<h1>Hello Sathvi</h1>");
    alert("Hey");
}
sayHi();

function sayHi(name, age){
    document.write("<h1>Hello " + name + "</h1>");
    document.write("<p>You are " + age + " years old</p>");
    alert("Hey");
}
sayHi("Sathvi", 24);
function addition(num1, num2){
    return num1 + num2;
}
var addedNumbers = addition(4, 100);
document.write(addition(4, 5) + "<br>");
document.write(addedNumbers);

//accessing html elements
var header = document.getElementById("header");
header.innerHTML = "Sathvika";
header.style.color = "maroon";
header.style.backgroundColor = "grey";
var link = document.getElementById("link");
link.href = "https://amazon.com";
link.style = "color:blue;"
*/
//event listeners
function handleClick(element){
    //alert("Clicked");
    element.innerHTML = "Clicked"
    element.style="background-color:pink;"
}

var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
    this.style.boxShadow = "2px 2px 2px grey";
    this.style.width = "110px";
});
image.addEventListener("mouseout", function () {
    this.style.boxShadow = "";
    this.style.width = "100";
});

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});
