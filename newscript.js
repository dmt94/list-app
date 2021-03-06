//second version



let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let lists = document.querySelectorAll("li");
let ul = document.querySelector("ul");

button.addEventListener("click", noRepeat);
button.addEventListener("click", removeDiv);

removeDiv();
done();

function listCheck() {

  let grabList = document.querySelectorAll(".list-bullet");
  let listLength = grabList.length;
  let lastListItem = grabList[listLength - 1];

  for (let key of grabList) {
    console.log(key.innerText);
    if (input.value.toLowerCase() === key.innerText || 
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

function done() {
  let listBulletItems = document.querySelectorAll(".list-bullet");
  for (let key of listBulletItems) {
    key.addEventListener("click", cross);

    function cross() {
      key.classList.toggle('done');
    }
  }
}

