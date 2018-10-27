exports.playerTurn = function playerTurn(curPlayer){

	if(curPlayer == "X"){
        curPlayer = "O";
    }
    else{
        curPlayer = "X"
    }
    return curPlayer;
}

exports.initializeBoard = function initializeBoard(){
	var array = [];
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
			console.log(board[i]);
			//document.write(board[i] + " ");
		}else{
			//document.write(board[i] + " ");
			console.log(board[i]);
		}
	}

	console.log("\n");
}

exports.pickSquare = function pickSquare(squareNumber, player){
	if(board[squareNumber] == '.'){
		if(player == 'X'){
			board[squareNumber] = 'X';
		}

		if(player == 'O'){
			board[squareNumber] = 'O';
		}
	}

	return player;
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

function readStdInput(){
	var input = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return input.question("bleh", function(answer){
		input.close();
	});
}

const board = exports.initializeBoard();

const maxTurns = 9;

/*
module.exports.displayBoard();
module.exports.pickSquare(3, 2);
module.exports.pickSquare(5, 2);
module.exports.pickSquare(7, 2);
module.exports.displayBoard();
module.exports.displayBoard();
*/