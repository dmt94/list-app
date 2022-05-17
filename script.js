let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let lists = document.querySelectorAll("li");
let ul = document.querySelector("ul");

console.log(ul.children);

// function inputLength() {
//   return input.value.length;
// }

// function listCheck() {
//   let userListInput = input.value;
//   let groceryList = ul.children;

//   for (let i = 0; i < groceryList.length; i++) {
//     console.log(groceryList[i].innerHTML);
//     if (groceryList[i].innerHTML.toLowerCase() === userListInput.toLowerCase()) {
//       alert("Item is already on the list.");
//       return false;
//     }
//   }
//   return true;
// }

// function createListElement() {
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
// }

// function addListAfterClick() {
//   if (inputLength() > 0 && listCheck() === true) {
//     createListElement();
//     console.log(lists);
//   }
// }

// function addListAfterKeyPress(event) {
//   if (inputLength() > 0 && event.keyCode === 13 && listCheck() === true) {
//     createListElement();
//     console.log(lists);
//   }
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeyPress);


//second version

let listItemDiv = document.querySelectorAll(".list-item");
let listItemDivEntries = Object.entries(listItemDiv);

console.log(listItemDiv);

for (let key of listItemDiv) {
  let listItem = key.children[0].innerText;
  // let buttonItem = 
 
  console.log(key.children[0].innerText);
  console.log(key.children[1]);
  console.log(key.children);

}

// console.log(Object.entries(listItemDiv));
// console.log(Array.isArray(listItemDiv));