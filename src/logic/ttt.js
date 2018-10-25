exports.playerTurn = function playerTurn(curPlayer){
	if(curPlayer != "x" && curPlayer != "o"){
		return "x and o only"
	}
	if(curPlayer == "x"){
        curPlayer = "o";
    }
    else{
        curPlayer = "x"
    }
    return "it's " + curPlayer + " turn";;
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

exports.checkWinner = function checkWinner(){
	var winner = null;

	for(var i = 0; i < 3; i++){
		if(board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '.'){
			winner = board[i];
		}
	}

	for(var i = 0; i < 7; i += 3){
		if(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '.'){
			winner = board[i];
		}
	}

	if(board[0] == board[4] && board[0] == board[8] && board[0] != '.'){
		winner = board[0];
	}

	if(board[2] == board[4] && board[2] == board[6] && board[2] != '.'){
		winner = board[2];
	}

	return winner;
}

const board = exports.initializeBoard();
/*
exports.playerTurn();

exports.displayBoard();
exports.pickSquare(3, 2);
exports.pickSquare(5, 2);
exports.pickSquare(7, 2);
exports.displayBoard();
exports.displayBoard();

console.log(exports.checkWinner());*/

