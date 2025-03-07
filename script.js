// Global Variables
let modal = document.querySelector(".modal");
let closemodal = document.getElementById("closemodal");
let closemodalboard = document.getElementById('closemodalboard');
let addtodobtn = document.getElementById('addtodobtn');
let cointer = document.querySelector(".cointer");
let addboard = document.querySelector('.plus-button');
let addboardbtn = document.getElementById("addboardbtn");
let modalforboard = document.querySelector(".modalforboard");
let currentBoardContent = null;
let addeditbtn = document.getElementById('addeditbtn');
let modalforedit = document.querySelector(".modalforedit");
let closemodaledit = document.getElementById('closemodaledit')
let allboard = document.querySelectorAll('.content');
let allitems = document.querySelectorAll('.items');

// Enable dragging and dropping for boards
allboard.forEach(board => {
  board.addEventListener('dragover', (event) => {
    event.preventDefault();
    let flyingitem = document.querySelector(".flyingjaat");
    board.appendChild(flyingitem);
  });
});

// Function to handle the editing of tasks
cointer.addEventListener("click", function(event){
  if(event.target.classList.contains('edit-btn')){
    let divitem = event.target.closest('.items');
    let ptext = divitem.querySelector(".ptext");
    openeditmodal(ptext);
  }
});

// Function to open the edit task modal
function openeditmodal(PContent){
  modalforedit.style.display = 'flex';
  CurrentPContent = PContent
  document.querySelector('.inputedit').value = PContent.innerText

  closemodaledit.onclick = function() {
    modalforedit.style.display = "none";
  };

  addeditbtn.onclick = function() {
    let inputtask = document.querySelector('.inputedit');
    if (inputtask.value.trim() === "") {
      alert("Please enter a task.");
    } else {
      CurrentPContent.innerText = inputtask.value
      inputtask.value = "";
      modalforedit.style.display = "none";
    }
  };
}

// Function to delete tasks
cointer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    let items = event.target.closest('.items');
    if (items) {
      items.style.opacity = '0';
      items.style.transform = 'scale(0.9)';
      setTimeout(function() {
        items.remove();
      }, 300);
    }
  }
});

// Open "Add Item" modal
function openAddItemModal(boardContent) {
  modal.style.display = "flex";
  currentBoardContent = boardContent;

  closemodal.onclick = function() {
    modal.style.display = "none";
  };

  addtodobtn.onclick = function() {
    let inputtask = document.getElementById('inputtask');
    if (inputtask.value.trim() === "") {
      alert("Please enter a task.");
    } else {
      addItemToBoard(inputtask.value, currentBoardContent);
      inputtask.value = "";
      modal.style.display = "none";
    }
  };
}

// Function to add an item to the board
function addItemToBoard(taskText, boardContent) {
  let itemDiv = document.createElement('div');
  itemDiv.classList.add("items");
  itemDiv.setAttribute('draggable', true);

  let p = document.createElement('p');
  p.innerText = taskText;
  p.classList.add('ptext');
  p.setAttribute("contenteditable", false);
  itemDiv.appendChild(p);

  let itembtndiv = document.createElement('div');
  itembtndiv.classList.add('itembtn');

    // Add timestamp
    let timestampDiv = document.createElement('p');
    timestampDiv.classList.add('timestamp');
    timestampDiv.innerText = getFormattedTimestamp();
    itembtndiv.appendChild(timestampDiv);

  let buttonedit = document.createElement('button');
  buttonedit.classList.add('edit-btn');
  buttonedit.innerText = "🖋";
  itembtndiv.appendChild(buttonedit);

  let buttondel = document.createElement('button');
  buttondel.classList.add('delete-btn');
  buttondel.innerText = "🗑";
  itembtndiv.appendChild(buttondel);

  itemDiv.appendChild(itembtndiv);

  // Add drag event listeners to the newly created task item
  itemDiv.addEventListener('dragstart', () => {
    itemDiv.classList.add('flyingjaat');
  });

  itemDiv.addEventListener('dragend', () => {
    itemDiv.classList.remove('flyingjaat');
  });

  boardContent.appendChild(itemDiv);
}

// Function to get formatted timestamp
function getFormattedTimestamp() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return `${date} ${time}`;
}
// Add event listeners for "Add Item" buttons on each board
cointer.addEventListener('click', function(event) {
  if (event.target.classList.contains('addbtn')) {
    let board = event.target.closest('.board');
    let boardContent = board.querySelector('.content');
    openAddItemModal(boardContent);
  }
});

// Function to open "Add Board" modal
function openAddBoardModal() {
  modalforboard.style.display = "flex";

  closemodalboard.onclick = function() {
    modalforboard.style.display = "none";
  };

  addboardbtn.onclick = function() {
    let inputboard = document.querySelector('.inputboard');
    if (inputboard.value.trim() === "") {
      alert("Please enter a board name.");
    } else {
      createBoard(inputboard.value);
      inputboard.value = "";
      modalforboard.style.display = "none";
    }
  };
}

// Function to create a new board
function createBoard(boardName) {
  let boardDiv = document.createElement('div');
  boardDiv.classList.add('board');

  let headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');
  headingDiv.innerHTML = `<h4>🟠 ${boardName}</h4>`;

  let buttondelboard = document.createElement('button');
  buttondelboard.classList.add('boarddelete-btn');
  buttondelboard.innerText = "🗑";
  buttondelboard.onclick = function(){
    boardDiv.style.opacity = '0';
    boardDiv.style.transform = 'scale(0.9)';
        setTimeout(function() {
            boardDiv.remove();
        }, 300);
  }
  headingDiv.appendChild(buttondelboard);

  let contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  contentDiv.addEventListener('dragover', () => {
    let flyingitem = document.querySelector(".flyingjaat");
    contentDiv.appendChild(flyingitem);
  });

  let addItemBtn = document.createElement('button');
  addItemBtn.classList.add('addbtn');
  addItemBtn.innerText = '+ Add item';
  boardDiv.appendChild(addItemBtn);

  boardDiv.appendChild(headingDiv);
  boardDiv.appendChild(contentDiv);

  cointer.appendChild(boardDiv);
}

// Event listener for "Add Board" button
addboard.onclick = openAddBoardModal;