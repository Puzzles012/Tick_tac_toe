const game = require("../src/logic/ttt.js");

//const game = $.getScript("../src/logic/ttt.js");

//var game = getScript("../src/logic/ttt.js");
/*var $ = jQuery;

$.getScript("../src/logic/ttt.js", function(){
	alert('load');
})*/
//import * from '../src/logic/ttt.js'
//console.log("yes");

function gameLoop(){
	var gameOver = false;
	var turnCount = 0;
	var playerTurn = 'X';
	var winner = null;

	while(!gameOver){
		game.pickSquare(1, playerTurn);

		if(game.checkWinner() != null){
			gameOver = true;
			winner = game.checkWinner();
			console.log(winner + " is the winner!");
			return winner;
		}

		if(game.checkWinner() == null && turnCount == 9){
			console.log("DRAW!");
			gameOver = true;
			return winner;
		}
		playerTurn = game.playerTurn(playerTurn);
		turnCount++;
	}
}

var playerXScore = 0;
var playerOScore = 0;
var playAgain = true;

var winner = gameLoop();

if(winner == 'X'){
	playerXScore++;
}

else if(winner == 'O'){
	playerOScore++;
}

//TODO: play again?
playAgain = false;
 