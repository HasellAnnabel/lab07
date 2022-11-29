//each item can be either null ()empty, 0 (player 1), 1 (player2)//
const boardState = [
  null, null, null,
  null, null, null,
  null, null, null
];

// the win conditional win//
const winCondition = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2],
];

//the active player//
let activePlayer = 0;

//cells//
const cells = document.querySelectorAll("td");

//add hover effect to cells//
cells.forEach(function (cell, index) {
  cell.dataset.index = index = index;

  cell.onmouseover = function () {
    
    cell.style.backgroundColor = "#ccc";

    cell.style.transition = "1s"; 
  }

  cell.onmouseout = function () {

    cell.style.backgroundColor = "#fff";

  }
  
  cell.addEventListener("click", clicked);

});

//clicked function//
function clicked (event){
  const index = Number(event.target.dataset.index);

  const letter = activePlayer ? "o" : "x";
  event.target.textContent = letter;

  const cell = event.target;
  cell.textContent = letter;

  boardState [index] = activePlayer;

  cell.removeEventListener("click", clicked);
  cell.onmouseover = null;

  if(hasWon()) {

    window.location = "./winner,html";
  }

  if(hasDraw()) {

    window.location = "./draw,html";
  }

  activePlayer = activePlayer ? 0 : 1;
}

//the win detector//
function hasWon () {

  for (const condition of winCondition) {
  const boardValues = condition.map(function (item) {
  return boardState[item];
  });

  const playerPieces = boardValues.filter(function (item) { 
    return item === activePlayer;

  });
  
  if (playerPieces === 3) return true;
  
  }

  return false; 

}

function hasDraw () {

  const boardCapacity = boardState.filter(function (item) {
  
  return item !== null;
  
  });
  
  return boardCapacity.length === boardState.length;
  
  }
  
  const again = Document.querySelector("#again");
  
  if (again) {
  
  again.onclick= (event) => {
  
  event.preventDefault();
  
  window.location = "./";
  }
}