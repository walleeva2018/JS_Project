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
  item = item + 1;
  showItem();
  const list = document.getElementById('list');
  const listItem = document.createElement('li');

  const itemText = document.createElement('span');
  itemText.innerText = inputField.value;
  itemText.style.color = 'black';
  itemText.style.background = 'white';
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

  doneButton.addEventListener('click', function () {
    item--;
    if (item > 0) {
      showItem();
    }
    listItem.done = true;
    listItem.style.textDecoration = 'line-through';
    listItem.style.background = 'grey';
    currentState();
  });

  deleteButton.addEventListener('click', function () {
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
});

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    item = item + 1;
    showItem();
    const list = document.getElementById('list');
    const listItem = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.innerText = inputField.value;
    itemText.style.color = 'black';
    itemText.style.background = 'white';
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

    doneButton.addEventListener('click', function () {
      item--;
      if (item > 0) {
        showItem();
      }
      listItem.done = true;
      listItem.style.textDecoration = 'line-through';
      listItem.style.background = 'grey';
      currentState();
    });

    deleteButton.addEventListener('click', function () {
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
  }
});

activeButton.addEventListener('click', function () {
  allButton.style.background = 'black';
  doneButton.style.background = 'black';
  activeButton.style.background = 'blue';

  const list = document.getElementById('list');
  const itemList = document.querySelectorAll('ul');
  itemList.forEach((ul) => {
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
  });
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

  const list = document.getElementById('list');
  const itemList = document.querySelectorAll('ul');
  itemList.forEach((ul) => {
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
  });

  for (let i = 0; i < currentList.length; i++) {
    list.append(currentList[i]);
  }
});

doneButton.addEventListener('click', function () {
  allButton.style.background = 'black';
  doneButton.style.background = 'blue';
  activeButton.style.background = 'black';

  const list = document.getElementById('list');
  const itemList = document.querySelectorAll('ul');
  itemList.forEach((ul) => {
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
  });
  for (let i = 0; i < currentList.length; i++) {
    if (currentList[i].done == true) {
      list.append(currentList[i]);
    }
  }
});

clearButton.addEventListener('click', function () {
  const list = document.getElementById('list');
  const itemList = document.querySelectorAll('ul');
  itemList.forEach((ul) => {
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
  });

  for (let i = 0; i < currentList.length; i++) {
    if (currentList[i].done == true) {
      const index = currentList.indexOf(currentList[i]);
      if (index !== -1) {
        currentList.splice(index, 1);
      }
      i--;
    }
    list.append(currentList[i]);
  }
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
  else number.innerHTML = `${item} item left`;
}
