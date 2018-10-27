const logic = require("../logic/ttt.js")

var player = 'X';
var totalturns = 0;
var xp = 0, op = 0;

const board = document.getElementsByClassName("square");

Array.prototype.forEach.call(board, square => square.addEventListener("click", addToBoard));

const getBoard = () => Array.from(board, cell => cell.innerHTML);

function addToBoard(b){
    const {id} = b.target;
    trg = b.target.innerHTML;
 
    if(trg == ""){
        totalturns++;
        document.getElementById(id).innerHTML = logic.pickSquare(id, player);
        player = logic.playerTurn(player);

        logic.displayBoard();

    	if(checkWinner() != null){
    		console.log(checkWinner() + " is the winner");
    	}

    	if(totalturns == 9){
    		console.log("DRAW");
    	}
    }
    else{
        console.log("Illegal move");
    }
}

function writeToboard(cid){
    document.getElementById(cid).innerHTML = player;
}

function displayPlayer(player){
    console.log('it is ' + player + ' turn!');
    document.getElementById('turn').innerHTML = player;
}

function validmoves(cid){
    var bla = document.getElementById(cid).innerHTML;
    //if there's already a winner, to make it impossible to put more stuff on board
    if(checkWinner() == true){
        return 0;
    }
    else if(bla == "X" || bla == "O"){
        return 0;
    }
    else{
        return 1;
    }
}

function checkWinner(){
    return logic.checkWinner();
}
