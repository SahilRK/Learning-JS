/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Create all variables
var scores, roundScore, activePlayer, diceDOM, gamePlaying, doubleSix;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying){
        //1: Assign a random number between 1 and 6 to dice using Math object.
        var dice = Math.floor((Math.random()*6) + 1);

        //2: Change the dice based on the score of the dice variable and display the result.   
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+".png";

        //document.getElementById('current-'+activePlayer).textContent = dice;

        //3: Update round score if it is not 1
        if(dice !== 1){
            //add scores and update the current score
            roundScore += dice;
            document.getElementById("current-"+activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //Add current score to global score
        scores[activePlayer] += roundScore;

        //Update the score in current score
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

        //check if the active player has won and end the game
        if(scores[activePlayer] >= 20){
            alert("Hello");
            document.getElementById('name-'+activePlayer).textContent = "WINNER!";
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            gamePlaying = false;
        }else{
            //Change to next player
            nextPlayer();
        }
    }

});

document.querySelector(".btn-new").addEventListener('click', init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDOM.style.display = 'none';
}

function init(){
    //create an array for scores for two players
    scores = [0,0];
    //assign default value as a number to roundScore to calculate the score for each round
    roundScore = 0;
    //assign a default value to activePlayer. This value changes and is assigned a value equalant to the index of the scores array.
    activePlayer = 0;
    //assign a default value to gamePlaying
    gamePlaying = true;

    //hide the dice on loading the page
    document.querySelector('.dice').style.display = 'none';

    //reset or set all scores to 0 on load or refresh;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    diceDOM =  document.querySelector('.dice');
}






/* //change the value of the current score to dice value
document.querySelector('#current-'+activePlayer).textContent = dice;

var x = document.querySelector('#current-'+activePlayer).textContent;
console.log(x); */

