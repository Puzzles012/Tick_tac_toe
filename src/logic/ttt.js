//const board = exports.initializeBoard();

exports.game = function game(player){
	return "it's " + player + " turn";
}

exports.initializeBoard = function initializeBoard(){
	var array = [];

	/*
	the default value for each square is 0, if 
	player 1 or 2 pick the square the value turns 
	to 1 or 2, respectively
	 */
	for(var i = 0; i < 9; i++){
		array[i] = 0;
	} 

	return array;
}

exports.displayBoard = function displayBoard(array){
	//prints the board to console.
	for(var i = 0; i < array.length; i++){
		if(i % 3 == 0){
			console.log();
			process.stdout.write(array[i] + " ");
		}
		else{
			process.stdout.write(array[i] + " ");
		}
	}

	console.log("\n");
}

exports.displayBoard(exports.initializeBoard());
