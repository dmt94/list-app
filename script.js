// let button = document.getElementById("enter");
// let input = document.getElementById("userinput");
// let lists = document.querySelectorAll("li");
// let ul = document.querySelector("ul");

// console.log(ul.children);

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

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let lists = document.querySelectorAll("li");
let ul = document.querySelector("ul");

// div - list item
let listItemDiv = document.querySelectorAll(".list-item");
let listItemDivLength = document.querySelectorAll('.list-item').length;

// list inside div
let grabList = document.querySelectorAll(".list-bullet");
let listLength = grabList.length;
let lastListItem = grabList[listLength - 1];


function listCheck() {
  for (let key of listItemDiv) {
    let listItem = key.children[0].innerHTML;


    if (input.value.toLowerCase() === listItem.toLowerCase() || 
    input.value.toLowerCase() === lastListItem.innerHTML.toLowerCase() ||
    input.value.length < 1) {
      return false;
    }
  }
  return true;
}

let createListDiv;
function addDivAfterClick() {
  createListDiv = document.createElement('div');
  createListDiv.classList.add('list-item');
  addListAfterClick();
  addButtonAfterClick();
  ul.appendChild(createListDiv);
}

function addListAfterClick() {
  let createListItem = document.createElement('li');
  createListItem.appendChild(document.createTextNode(input.value));
  createListItem.classList.add('list-bullet');
  input.value = "";
  createListDiv.appendChild(createListItem);
}

function addButtonAfterClick() {
  let createButton = document.createElement('button');
  createButton.appendChild(document.createTextNode('X'));
  createButton.classList.add('remove');
  createListDiv.appendChild(createButton);
}

function noRepeat() {
  if (listCheck() === true) {
    return addDivAfterClick();
  }
}

button.addEventListener("click", noRepeat);
