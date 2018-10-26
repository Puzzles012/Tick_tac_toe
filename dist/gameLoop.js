const Loop = require("src/logic/ttt.js")

function gameLoop(){
	var gameOver = false;
    var turnCount = 0;
	var playerTurn = 'X';
	var winner = null;

	while(!gameOver){
		Loop.displayBoard();
		
		Loop.pickSquare(1, playerTurn);

		if(Loop.checkWinner() != null){
			gameOver = true;
			winner = Loop.checkWinner();
			console.log(winner + " is the winner!");
			return winner;
		}

		if(Loop.checkWinner() == null && turnCount == 9){
			console.log("DRAW!");
			gameOver = true;
			return winner;
		}
		playerTurn = exports.playerTurn(playerTurn);
		turnCount++;
	}
}