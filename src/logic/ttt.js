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
			document.write(board[i] + " ");
		}else{
			document.write(board[i] + " ");
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



const board = exports.initializeBoard();

const maxTurns = 9;


