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
        if(checkBoard() == true){
            document.getElementById('winner').innerHTML = "The winner is " + player;
        }
        else{
          totalturns++;
          document.getElementById(id).innerHTML = logic.pickSquare(id, player);
          player = logic.playerTurn(player);
        }
        logic.displayBoard();

    	if(checkWinner() != null){
    		console.log(checkWinner() + " is the winner");
    	}

    	if(totalturns == 9){
    		console.log("DRAW");
    	}

       // displayPlayer(player);
        }

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
function checkBoard(){
    //let boardArray = () Array.from(getBoard, values =>values.)
    var winner = logic.checkWinner();
    if(winner == 'X' || winner == 'O'){
        return true;
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
