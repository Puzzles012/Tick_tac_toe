function playerTurn(curPlayer){
    if(curPlayer == "x"){
        curPlayer == "o";
    }
    else if(curPlayer == "o"){
        curPlayer == "x"
    }
    return curPlayer;
}
function turn(player){
    playerTurn(player);
    var stat = "it's " + player + " turn";

    return stat;
}
module.exports = turn;