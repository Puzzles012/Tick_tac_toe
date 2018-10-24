function game(player){
    return "it's " + player + " turn";
}

function initializeBoard(){
	var array = null;

	for(var i = 0; i < 9; i++){
		array[i] = false;
	} 

	return array;
}

function displayBoard(array){
	for(var i = 0; i < array.length; i++){
		console.log(array[i]);
	}
}

//module.exports = game;

displayBoard(initializeBoard());