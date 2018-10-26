exports.playerTurn = function playerTurn(curPlayer){
	if((curPlayer != "X" && curPlayer != "O") && (curPlayer != "x" && curPlayer != "o")){
		return "X and O only"
	}
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

exports.pickSquare = function pickSquare(squareNumber, player){
	if(board[squareNumber - 1] == '.'){
		if(player == 'X'){
			board[squareNumber - 1] = 'X';
		}

		if(player == 'O'){
			board[squareNumber - 1] = 'O';
		}
	}

	return board;
}

exports.checkWinner = function checkWinner(){

	for(var i = 0; i < 3; i++){
		if(board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '.'){
			return board[i];
		}
	}

	for(var i = 0; i < 7; i += 3){
		if(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '.'){
			winner = board[i];
		}
	}

	if(board[0] == board[4] && board[0] == board[8] && board[0] != '.'){
		return board[0];
	}

	if(board[2] == board[4] && board[2] == board[6] && board[2] != '.'){
		return board[2];
	}

	return null;
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

function gameLoop(){
	var gameOver = false;
	var turnCount = 0;
	var playerTurn = 'X';
	var winner = null;

	while(!gameOver){
		exports.displayBoard();
		//console.log("it's " + playerTurn + "'s turn!");

		//var input = readline();

		//var input = readStdInput();

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

const board = exports.initializeBoard();
//const readline = require('readline');
const maxTurns = 9;

var playerXScore = 0;
var playerOScore = 0;
var playAgain = true;


while(playAgain){
	var winner = gameLoop();

	if(winner == 'X'){
		playerXScore++;
	}

	else if(winner == 'O'){
		playerOScore++;
	}

	//TODO: play again?
	playAgain = false;
}

/*
exports.playerTurn();

exports.displayBoard();
exports.pickSquare(3, 2);
exports.pickSquare(5, 2);
exports.pickSquare(7, 2);
exports.displayBoard();
exports.displayBoard();

console.log(exports.checkWinner());*/

