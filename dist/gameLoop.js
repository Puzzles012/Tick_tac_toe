

function gameLoop(){
	var gameOver = false;
    var turnCount = 0;
	var playerTurn = 'X';
	var winner = null;

	while(!gameOver){
		exports.displayBoard();
		
		exports.pickSquare(1, playerTurn);

		if(exports.checkWinner() != null){
			gameOver = true;
			winner = exports.checkWinner();
			console.log(winner + " is the winner!");
			return winner;
		}

		if(exports.checkWinner() == null && turnCount == 9){
			console.log("DRAW!");
			gameOver = true;
			return winner;
		}
		playerTurn = exports.playerTurn(playerTurn);
		turnCount++;
	}
}