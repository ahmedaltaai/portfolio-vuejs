var playfields = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],
  [3, 8],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 6],
  [5, 7],
  [5, 8],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],
  [6, 8],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8],
  [8, 1],
  [8, 2],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 6],
  [8, 7],
  [8, 8]
];

var isRed = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

var paintfields = document.getElementsByClassName("paint");

var row, column, moves, score;

function newtry() {
  score = 0;
  moves = 0;
  row = Math.floor(Math.random() * 8) + 1;
  column = Math.floor(Math.random() * 8) + 1;
  document.getElementById("knight").style.gridRowStart = row;
  document.getElementById("knight").style.gridColumnStart = column;
  for (i = 0; i <= 63; i++) {
    paintfields[i].style.opacity = 0;
    isRed[i] = false;
  }
  document.getElementById("moves").innerHTML = "Moves: " + moves;
  document.getElementById("start").style.display = "none";
  document.getElementById("win").style.display = "none";
  document.getElementById("aside").style.display = "flex";
  // document.querySelector("#aside button").style.display = "";

}

function myMove(i) {
  if (
    (row + 1 == playfields[i][0] && column + 2 == playfields[i][1]) ||
    (row + 1 == playfields[i][0] && column - 2 == playfields[i][1]) ||
    (row - 1 == playfields[i][0] && column + 2 == playfields[i][1]) ||
    (row - 1 == playfields[i][0] && column - 2 == playfields[i][1]) ||
    (row + 2 == playfields[i][0] && column + 1 == playfields[i][1]) ||
    (row + 2 == playfields[i][0] && column - 1 == playfields[i][1]) ||
    (row - 2 == playfields[i][0] && column + 1 == playfields[i][1]) ||
    (row - 2 == playfields[i][0] && column - 1 == playfields[i][1])
  ) {
    row = playfields[i][0];
    column = playfields[i][1];
    if (isRed[i] == true) {
      isRed[i] = false;
      paintfields[i].style.opacity = 0;
      score -= 1;
      moves += 1;
    } else {
      isRed[i] = true;
      paintfields[i].style.opacity = 0.7;
      score += 1;
      moves += 1;
    }
  }

  document.getElementById("knight").style.gridRowStart = row;
  document.getElementById("knight").style.gridColumnStart = column;

  document.getElementById("moves").innerHTML = "Moves: " + moves;

  if (score == 64) {
    document.getElementById("win").style.display = "block";
    document.getElementById("win").innerHTML =
      "Congratulations! </br> </br> You have won with " + moves + " moves.";
    row = 11;
    column = 11;
  }
}
