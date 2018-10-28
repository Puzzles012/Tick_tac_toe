const logic = require("../logic/ttt.js")

var player = "X";
var totalturns = 0;
var xp = 0, op = 0;

const board = document.getElementsByClassName("square");

Array.prototype.forEach.call(board, square => square.addEventListener("click", addToBoard));

const getBoard = () => Array.from(board, cell => cell.innerHTML);


function addToBoard(b){
    const {id} = b.target;
    trg = b.target.innerHTML;
 
    if(trg == "" && checkWinner() == null){
        totalturns++;
        document.getElementById(id).innerHTML = logic.pickSquare(id, player);
        //if there is a winner
        if(checkWinner() != null){
            var res = document.getElementsByClassName('winner')[0];
            res.innerHTML = "the winner is " + player;
            console.log(checkWinner() + " is the winner"); 
            remove();         
            return;

        }
        //if there is a draw
        else if(totalturns == 9 && checkWinner() == null){
            console.log("DRAW");
            var res = document.getElementsByClassName('winner')[0];
            res.innerHTML = "Draw";
        }
        else{
            //swaps player and prints to board
            player = logic.playerTurn(player);
            document.getElementById("player").innerHTML = player;
        }
    }
    else{
        console.log("Illegal move");
    }   
}
//makes remaining squares not clickable to be able to click on them after there is a winner
function remove(){
    var values = document.getElementsByTagName('span');
    for(let i = 0; i < values.length; i++) {
        if(values[i].innerHTML != "X" && values[i].innerHTML != "O")
        values[i].innerHTML = " ";
    }
}
//to reset the board
const reset = document.getElementById("reset");
reset.addEventListener("click", resetFunc);
function resetFunc(){  
    var values = document.getElementsByTagName('span');
    logic.reset();
    for(let i = 0; i < values.length; i++) {
        values[i].innerHTML = "";
    }
    player = "X";
    totalturns = 0;
    var res = document.getElementsByClassName('winner')[0];
    res.innerHTML = "";
    var resTurn = document.getElementById('player');
    resTurn.innerHTML = 'X';
    winner = null;
}
//calls to checkwinner function in logic/ttt
function checkWinner(){
    return logic.checkWinner();
}
