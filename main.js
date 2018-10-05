
var computerChoices = ['r', 'p', 's'];
var wins = 0;
var losses = 0;
var ties = 0;
var gamesLeft = 10;
var youTheChamp = null;


//on this function the game starts, user will push a key down and we will get some action!
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    //captures user input and changes it to lowercase if they happened to enter it as uppercase
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //computers guess willbe random, using math random (floor to get an integer without a decimal) random number the length of the computer choices array(3)

    console.log(userGuess);
    console.log(computerGuess)

    if ((userGuess === 'r')|| (userGuess === 's') || (userGuess=== 'p'))
    //if the user chooses any of the three letters start the game
    {
        //start game here
    }else{
        alert("You have to choose R, S or P!")
        //if they dont alert them to choose the right letters
    }




































}