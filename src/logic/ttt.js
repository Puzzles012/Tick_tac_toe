function playerTurn(player){
    if(player == "x" || player == "o"){
        return "it's " + player + " turn";
    }
    else{
        return "x and o only";
    }
}
module.exports = playerTurn;