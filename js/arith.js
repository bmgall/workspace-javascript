// External Java Script file

//Get element -> get by text
let spanE = document.getElementById("num1");
let n1 = parseInt(spanE.textContent);
let n2 = parseInt(document.getElementById("num2").textContent);

//Add nums
let c = n1+n2;

//display
document.write(c);