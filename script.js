let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("sum").innerHTML = text.length;

 var font = "Apple, Banana, Kiwi";
 var  part = font.slice(6,14);
document.getElementById("result").innerHTML = part; 

let x = "5";
document.getElementById("demo").innerHTML = x.padStart(5,"*");

var y="4"
document .getElementById("model").innerHTML=y.padEnd(4,"0");


let str = "selection";
document.getElementById("answer").innerHTML = str[6];

let variable = "a,b,c,d,e,f";
const myArray = variable.split(",");
document.getElementById("key").innerHTML = myArray[2];


let A = "I love cats. Cats are very easy to love. Cats are very popular."
A = A.replaceAll("Cats","Dogs");
A = A.replaceAll("cats","dogs");
document.getElementById("solution").innerHTML = A;

var B = "HELLO WORLD";
document.getElementById("rule").innerHTML = B.charAt(1);

function myFunction() {
    let C= document.getElementById("module").innerHTML;
    document.getElementById("module").innerHTML =
    C.toUpperCase();
  }

  
function myFunction1() {
    let D= document.getElementById("submit").innerHTML;
    document.getElementById("submit").innerHTML =
    D.toLowerCase();
  }

  
function myFunction2() {
    let E = document.getElementById("input").innerHTML; 
  document.getElementById("input").innerHTML =
  E.replace("Microsoft","W3Schools");
  }

let F = "Hello";
let G = "World!";
let H = F.concat(" ",G);
document.getElementById("title").innerHTML = H;
 

  
