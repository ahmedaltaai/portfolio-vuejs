var game = () => {
  let pScore = 0;
  let cScore = 0;
  let rScore = 0;
  var rounds = document.querySelector(".rounds");
  var options = document.querySelectorAll(".options button");
  var optionsContainer = document.querySelector(".options");
  var disableBtn = document.querySelectorAll(".btn");
  var gameOver = document.querySelector(".message p");
  var restart = document.querySelector(".restart");

  //Start the Game
  var startGame = () => {
    var playBtn = document.querySelector(".intro button");
    var introScreen = document.querySelector(".intro");
    var match = document.querySelector(".match");


    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match
  var playMatch = () => {
    // var options = document.querySelectorAll(".options button");
    var playerHand = document.querySelector(".player-hand");
    var computerHand = document.querySelector(".computer-hand");
    var hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Computer Options
    var computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        //Computer Choice
        var computerNumber = Math.floor(Math.random() * 3);
        var computerChoice = computerOptions[computerNumber];
        resetHands();
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  function resetHands() {
    var playerHand = document.querySelector(".player-hand");
    var computerHand = document.querySelector(".computer-hand");
    playerHand.src = `./images/rock.png`;
    computerHand.src = `./images/rock.png`;
  }


  var updateScore = () => {
    var playerScore = document.querySelector(".player-score p");
    var computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    
    rScore++;

    // display restart button after the third round
    if (rScore === 3) {
      optionsContainer.style.display = "none";
      restart.classList.remove('hidden');
      restart.classList.add('show');
      restart.innerHTML = 'restart';
      restart.addEventListener('click', () => location.reload());
    }
    
    //disable buttons after 3 rounds
    disableBtn.forEach(callback => {
      if (rScore === 3) {
        callback.disabled = true;


        if(pScore === 2 || pScore === 3){
          gameOver.innerHTML = "3 rounds are over.<br> Player wins."
        } else if(cScore === 2 || cScore === 3){
          gameOver.innerHTML = "3 rounds are over.<br> Computer wins."
        }
      } 
    })
    
    rounds.innerHTML = rScore;
    
  };

  var compareHands = (playerChoice, computerChoice) => {
    //Update Text
    var winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        rounds.innerHTML = rScore;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        rounds.innerHTML = rScore;
        updateScore();
        return;
      }
    }

    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  

  //call all the inner functions
  startGame();
  playMatch();
};

//start the game function
game();