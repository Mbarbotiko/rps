
var computerChoices = ['r', 'p', 's'];
var wins = 0;
var ties = 0;
var gamesLeft = 10;
var youTheChamp = null; //make true false later
var cpuWins = 0

//on this function the game starts, user will push a key down and we will get some action!


document.onkeyup = function (event) {

    if (gamesLeft === 10) {
        alert("you have" + gamesLeft + 'games left!')
    } else {
        alert('press a key to play again')
    }

   
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

    
    } else {
        alert("You have to choose R, S or P!")
        //if they dont alert them to choose the right letters
    }


    // console.log(cpuWins)
    // console.log(ties)
    // console.log(wins)





}