// Part 1: Variables & Conditionals
let age = 20;
let userName = "Veronica";

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Part 2: Functions
function greet(name) {
  return "Hello, " + name + "!";
}

function squareNumber(num) {
  return num * num;
}

console.log(greet(userName));
console.log("Square of 5 is: " + squareNumber(5));

// Part 3: Loops
let fruits = ["Apple", "Banana", "Cherry", "Mango"];

// Example 1: for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: " + fruits[i]);
}

// Example 2: while loop
let count = 1;
while (count <= 3) {
  console.log("Count: " + count);
  count++;
}

// Part 4: DOM Interactions
let title = document.getElementById("title");
let intro = document.getElementById("intro");
let message = document.getElementById("message");
let list = document.getElementById("list");
let btnChange = document.getElementById("btnChange");
let btnList = document.getElementById("btnList");

// 1) Change intro text on button click
btnChange.addEventListener("click", function () {
  intro.textContent = "Thanks for visiting my project!";
  message.textContent = "JavaScript made this change happen!";
});

// 2) Change style dynamically
title.style.color = "#ff5722"; // orange-red
title.style.textShadow = "2px 2px 5px rgba(0,0,0,0.3)";

// 3) Populate fruit list dynamically
btnList.addEventListener("click", function () {
  list.innerHTML = ""; // clear list first
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
});
