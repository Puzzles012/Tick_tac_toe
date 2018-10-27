const logic = require("../logic/ttt.js")

var player = 'X';
var totalturns = 0;
var xp = 0, op = 0;

const board = document.getElementsByClassName("square");
const reset = document.getElementById("reset");
Array.prototype.forEach.call(board, square => square.addEventListener("click", addToBoard));

reset.addEventListener("click", resetFunc);
function addToBoard(b){
    const {id} = b.target;
    trg = b.target.innerHTML;
 
    if(trg == ""){
        totalturns++;
        document.getElementById(id).innerHTML = logic.pickSquare(id, player);
        

        logic.displayBoard();
        if(checkWinner() != null){
            var res = document.getElementsByClassName('winner')[0];
            res.innerHTML = "the winner is " + player;
            console.log(checkWinner() + " is the winner");            
            Array.prototype.forEach.call(board, square => square.removeEventListener("click", addToBoard));

        }
        else if(totalturns == 9 && checkWinner() == null){
            console.log("DRAW");
        }
        else{
            player = logic.playerTurn(player);
        }

       // displayPlayer(player);
        }
        else{
            console.log("Illegal move");
        }
    
}

function writeToboard(cid){
    document.getElementById(cid).innerHTML = player;
}

/*
helpme
function displayPlayer(player){
    console.log('it is ' + player + ' turn!');
    document.getElementById('turn').innerHTML = player;
}
*/

function resetFunc(){  
    var values = document.getElementsByTagName('span');
    logic.reset();
    for(let i = 0; i < values.length; i++) {
        values[i].innerHTML = ''
    }
    player = 'X';
    totalturns = 0;

    var res = document.getElementsByClassName('winner')[0];
    res.innerHTML = ""; 
    Array.prototype.forEach.call(board, square => square.addEventListener("click", addToBoard));
    winner = null;
}

function checkWinner(){
    return logic.checkWinner();
}
