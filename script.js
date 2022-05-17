//second version

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let lists = document.querySelectorAll("li");
let ul = document.querySelector("ul");

// div - list item
let listItemDiv = document.querySelectorAll(".list-item");

function listCheck() {
  for (let key of listItemDiv) {
    let listItem = key.children[0].innerHTML;
    // list inside div
    let grabList = document.querySelectorAll(".list-bullet");
    let listLength = grabList.length;
    let lastListItem = grabList[listLength - 1];

    // input.value.toLowerCase() === listItem.toLowerCase() ||
    if (input.value.toLowerCase() === lastListItem.innerHTML.toLowerCase() ||
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
button.addEventListener("click", removeDiv);

removeDiv();

function removeDiv() {
  let divElement = document.querySelectorAll('.list-item');
  for (let key of divElement) {
    let listButton = key.children[1];
    listButton.addEventListener("click", remove);

    function remove() {
      key.remove();
    }
  }
}



