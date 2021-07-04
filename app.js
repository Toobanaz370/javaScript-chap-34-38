// Q1 
// function currentDT(){
//     document.write(new Date)
// }
// currentDT()


// Q.2
// function greet(firstName,lastName){
//     alert("Hello! " + firstName + " " + lastName )
// } 
// greet("Amir","Khan")


// Q.3
// function sumOfnumbers(fisrtNum, secondNum){
//     fisrtNum = +prompt("Enter first Value")
//     secondNum = +prompt("Enter second Value")
//     alert(fisrtNum + secondNum)
// }
// sumOfnumbers()


// Q.04
// function calculateVaules(num1,num2,operator){
//     num1 = +prompt("Enter first Value")
//     num2 = +prompt("Enter second Value")
//     operator = prompt("Enter operator")
//     result = num1 + operator + num2
//     alert("Answer is " + eval(result))
// }
// calculateVaules()


// Q.5
// function squreNum(num){
//     alert(num * num)
// }
// squreNum(5)


// Q.6
// function factorial(value) {
//     return (value != 1) ? value * factorial(value - 1) : 1;
//   }
//   alert( factorial(8) )


// Q.7

// var firstNumber = +prompt("Enter the first Number");
// var lastNumber = +prompt("Enter the last Number");
// function count(){
// for (var i=firstNumber ; i<=lastNumber ; i++){
// document.write(i + "<br>")
// }
// }
// count()

// Q.8

// var perpendicular = prompt ("Value of perpendicular")
// var base = prompt ("Value of base")
// function calHypo(a,b){
// return Math.sqrt((perpendicular * perpendicular) + (base * base))
// }
// alert (calHypo(perpendicular , base));



// Q.9

// function rect(l,b){
// var area = l*b
// alert (area);
// }
// rect(5, 8);




// Q.10

// function palindrome(){
// var letters = prompt ("Enter your word")
// var check = "";
// for (var a = letters.length -1 ; i>=0 ; a--){
// check += letters[i];

// }
// if (letters === check){
// alert (letters + "is palidrome word")
// }
// else {
// alert("your word is not palindrom")
// }
// }
// palindrome();





// Q.11

// function abc(str){
// var sentence = str.toLowerCase().split('');
// for(var i = 0 ; i<sentence.length; i++){
// sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
// }
// document.write(sentence.join(" "));
// return sentence;

// }
// abc("the quick brown fox");





// Q.12

// function longestWord (string) {
// var wordArray = string.toLowerCase().split(" ");
// var longest = wordsArray[0];
// for (var a = 1 ; a < wordArray.length ; a++) {
// if(longest.length < wordArray[a].length) { 
// longest = wordArray[a];
// }
// }
// return longest;
// }
// var string = prompt ("Enter any string");
// var longest = longestWord (string);
// document.write("String:" + string + "<br>Longest word: " + longest);




// Q.13
// function letter(str, count){
// str = str.toLowerCase();
// var abc = (str.match(/o/g)).length;
// document.write(abc)
// }
// letter("JSResources.com" , "o");