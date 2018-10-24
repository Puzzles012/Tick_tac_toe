function playerTurn(currentPlayer){
    if(currentPlayer != "x" && currentPlayer != "o"){
        return "x and o only";
    }
    if(currentPlayer == "x"){
        currentPlayer = "o";
    }
    else{
        currentPlayer = "x";
    }
    return "it's " + currentPlayer + " turn";
}


module.exports = playerTurn;