exports.game = function game(player){
	return "it's " + player + " turn";
}

exports.initializeBoard = function initializeBoard(){
	var array = [];

	/*
	the default value for each square is ., if 
	player 1 or 2 pick the square the value turns 
	to X or O, respectively
	 */
	for(var i = 0; i < 9; i++){
		array[i] = '.';
	} 

	return array;
}

exports.displayBoard = function displayBoard(){
	//prints the board to console.
	for(var i = 0; i < board.length; i++){
		if(i % 3 == 0){
			console.log();
			process.stdout.write(board[i] + " ");
		}else{
			process.stdout.write(board[i] + " ");
		}
	}

	console.log("\n");
}

exports.pickSquare = function pickSquare(squareNumber, playerNumber){
	if(board[squareNumber - 1] == '.'){
		if(playerNumber == 1){
			board[squareNumber - 1] = 'X';
		}

		if(playerNumber == 2){
			board[squareNumber - 1] = 'O';
		}
	}

	return board;
}

const board = exports.initializeBoard();

/*
exports.displayBoard();
exports.pickSquare(1, 1);
exports.displayBoard();
exports.pickSquare(2, 2);
exports.displayBoard();
*/
