// getting all the element
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const activeButton = document.getElementById('activeButton');
const allButton = document.getElementById('allButton');
const doneButton = document.getElementById('doneButton');
const clearButton = document.getElementById('clearButton');
const number = document.getElementById('number');
const currentList = [];
allButton.style.background = 'blue';
let item = 0;


// function
addButton.addEventListener('click', function () {
     updateList();
});

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
       updateList();
  }
});

activeButton.addEventListener('click', function () {
  allButton.style.background = 'black';
  doneButton.style.background = 'black';
  activeButton.style.background = 'blue';
  
  clearList();
  console.log(list)

  debugger
  for (let i = 0; i < currentList.length; i++) {
    if (currentList[i].done == undefined) {
      list.append(currentList[i]);
    }
  }
});

allButton.addEventListener('click', function () {
  allButton.style.background = 'blue';
  doneButton.style.background = 'black';
  activeButton.style.background = 'black';

  clearList();

  for (let i = 0; i < currentList.length; i++) {
    list.append(currentList[i]);
  }
});

doneButton.addEventListener('click', function () {
  allButton.style.background = 'black';
  doneButton.style.background = 'blue';
  activeButton.style.background = 'black';
   
  clearList();

  for (let i = 0; i < currentList.length; i++) {
    if (currentList[i].done == true) {
      list.append(currentList[i]);
    }
  }
});

clearButton.addEventListener('click', function () {
   
  clearList();

  for (let i = 0; i < currentList.length; i++) {
    if (currentList[i].done == true) {
      const index = currentList.indexOf(currentList[i]);
      if (index !== -1) {
        currentList.splice(index, 1);
      }
      i--;
    }
    if(currentList[i]!=undefined)
    list.append(currentList[i]);
  }
  currentState();
});

function currentState() {
  if (allButton.style.background == 'blue') {
    allButton.click();
  }
  if (doneButton.style.background == 'blue') {
    doneButton.click();
  }
  if (activeButton.style.background == 'blue') {
    console.log('Came here');
    activeButton.click();
  }
}

function showItem() {
  if (item > 1) number.innerHTML = `${item} items left`;
  else if(item==1) number.innerHTML = `${item} item left`;
  else number.innerHTML="";
}

function updateList(){


  if(inputField.value=="")
  {
    return;
  }
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash");
  const doneIcon = document.createElement("i");
  doneIcon.classList.add("fas", "fa-check-circle");
  item = item + 1;
  showItem();
  const list = document.getElementById('list');
  const listItem = document.createElement('li');

  const itemText = document.createElement('span');
  itemText.innerText = inputField.value;
  itemText.style.color = 'black';
  itemText.style.background = 'white';
  itemText.style.marginLeft='30px';
  itemText.style.marginRight='30px';
  inputField.value = '';

  const doneButton = document.createElement('button');
  doneButton.innerText = 'Done';
  doneButton.style.color = 'green';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.style.color = 'red';

  itemText.addEventListener('dblclick', function () {
    itemText.contentEditable = true;
    itemText.focus();
  });
  doneButton.innerHTML="";
  doneButton.appendChild(doneIcon);
  doneButton.addEventListener('click', function () {
    if(listItem.done!=true)
    {
      item--;
      showItem();
    }
    listItem.done = true;
    listItem.style.textDecoration = 'line-through';
    listItem.style.background = 'grey';
    currentState();
  });
  deleteButton.innerHTML="";
  deleteButton.appendChild(trashIcon);
  deleteButton.addEventListener('click', function () {
    if(listItem.done!=true)
    {
      item--;
      showItem();
    }
    listItem.done = false;
    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i] == listItem) {
        const index = currentList.indexOf(currentList[i]);

        if (index !== -1) {
          currentList.splice(index, 1);
        }
        break;
      }
    }
    listItem.remove();
    currentState();
  });

  listItem.append(doneButton);
  listItem.append(itemText);
  listItem.append(deleteButton);

  currentList.push(listItem);
  list.appendChild(listItem);
  currentState();
}

function clearList(){
  const list = document.getElementById('list');
  list.innerHTML = '';
}

