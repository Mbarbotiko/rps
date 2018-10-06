
var computerChoices = ['r', 'p', 's'];
var wins = 0;
var ties = 0;
var gamesLeft = 10;
var youTheChamp = null;
var cpuWins = 0


//function to reset the game
function gameReset() {
    wins = 0;
    ties = 0;
    gamesLeft = 10;
    cpuWins = 0;
    youTheChamp = null

}

//function to alert user the results of the game when it ends
function alertGameOver() {
    alert('GAME OVER ' + 'WINS ' + ' ' + wins + ' ' + 'TIES ' + ties + ' ' + 'COMPUTER WINS ' + cpuWins + ' ' + youTheChamp)
}

//on this function the game starts, user will push a key down and we will get some action!
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    //captures user input and changes it to lowercase if they happened to enter it as uppercase
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //computers guess willbe random, using math random (floor to get an integer without a decimal) random number the length of the computer choices array(3)


    if ((userGuess === 'r') || (userGuess === 's') || (userGuess === 'p'))
    //if the user chooses any of the three letters start the game

    {
        if ((userGuess === "r") && (computerGuess === "s")) {
            wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
            cpuWins++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
            cpuWins++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
            wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
            wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
            cpuWins++;
        } else if (userGuess === computerGuess) {
            ties++;
        }
        gamesLeft--

        if (gamesLeft === 0) {
              //evaluate number of games left if 0 alert the user game is over display results and reset the game

            if (wins > cpuWins) {
                youTheChamp = 'YOU WON!'
                alertGameOver()
        
            }

            if (wins < cpuWins) {
                youTheChamp = "COMPUTER WON!"
              
                alertGameOver()
            }

            if (wins === cpuWins) {
                youTheChamp = "ITS A TIE!"
                alertGameOver()
            }

            gameReset();

        }

    } else {
        alert("You have to choose R, S or P!")
        //if they dont alert them to choose the right letters
    }

    var textUserChoice = document.getElementById('userguess').innerHTML = '<h1>' + userGuess.toUpperCase() + '</h1>'
    var textCpuChoice = document.getElementById('computerguess').innerHTML = '<h1>' + computerGuess.toUpperCase() + '</h1>'
    var textUserWins = document.getElementById('wins').innerHTML = '<h1>' + wins + '</h1>'
    var textCpuWins = document.getElementById('cpuwins').innerHTML = '<h1>' + cpuWins + '</h1>'
    var textTies = document.getElementById('ties').innerHTML = '<h1>' + ties + '</h1>'
    var textGamesLeft = document.getElementById('gamecounter').innerHTML = '<h1>' + gamesLeft + '</h1>'

}