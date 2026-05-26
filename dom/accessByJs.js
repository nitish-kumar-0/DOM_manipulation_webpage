let body = document.querySelector("body");

let btn = document.createElement("button");
btn.innerText="click me";

body.append(btn);


let div = document.createElement("div");
div.classList.add("green");

body.append(div);



let input = document.createElement("input");

input.type ="text";

input.placeholder = "enter your name";

input.id = "username";

body.append(input);


