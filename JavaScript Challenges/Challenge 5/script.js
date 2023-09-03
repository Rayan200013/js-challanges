// ## Step 1: DOM Creation and Navigation

// ### DOM Tree Navigation

// Use JavaScript to select the `div` with class name `menu` , `header` element, and `footer` element. Then navigate to its child elements, logging them to the console.

let menu1 = (document.getElementsByClassName("menu").innerHTML = "Hello world");
console.log(menu1);

let header = (document.getElementsByClassName("header").innerHTML =
  "Hello Header");
console.log(header);

let footer = (document.getElementsByClassName("footer").innerHTML =
  "Hello Footer");
console.log(footer);

// ### DOM Element Creation

// Create a new DOM element, a `<div>` with the class "container". Inside this, add a paragraph (`<p>`) with the text `Hello, World!`.

// let heading2 = document.createElement("h2");
// heading2.textContent = "Hello this is heading two created with js";

// let div = document.createElement("div");
// div.innerHTML = `<p class="container"> this is a paragraph </p>`;

// div.append(heading2);

// Create a new DOM element, a <div> with the class "container". Inside this, add a paragraph (<p>) with the text "Hello, World!".

//awal shi create a div element by document.creatElement

let div = document.createElement("div");
// mana naamlo class by classList and the add method add()
div.classList.add("container");
//mana n3aref l p ele mana nhuta inside our div that we created
let paragraph = document.createElement("p");
//mana nkhale ykun fe text al paragraph
paragraph.innerText = "Hello this is js";

// mana naaml appendChild() lal paragraph inside our div
div.appendChild(paragraph);

//mana yeha tbayn bi our browser
document.body.appendChild(div);

// ### Element Styling

div.style.backgroundColor = "blue";
paragraph.style.color = "#fff";
paragraph.style.fontSize = "24px";
paragraph.style.fontFamily = "Helvetica";
paragraph.style.border = "solid 1px #000";
// header.style.fontStyle = "italic";

// ### Multiple Event Listeners

const onChangeButton = document.createElement("button");
onChangeButton.textContent = "hover me";
onChangeButton.addEventListener("mouseover", () => {
  onChangeButton.style.backgroundColor = "red";
});
onChangeButton.addEventListener("mouseout", () => {
  onChangeButton.style.backgroundColor = "";
});

document.body.appendChild(onChangeButton);

// Event Delegation

const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Clicked button text:", event.target.textContent);
  }
});

// Form Data Extraction

const form = document.createElement("form");
form.innerHTML = `
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <label for="email">Email:</label>
  <input type="text" id="email" name="email"><br><br>
  <button type="submit">Submit</button>
`;

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  console.log("Name:", nameInput.value);
  console.log("Email:", emailInput.value);
});

document.body.appendChild(form);
