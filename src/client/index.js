const logic = require("../logic/ttt.js")

var player = 'x';
var totalturns = 0;
var xp = 0, op = 0;

const board = document.getElementsByClassName("square");

Array.prototype.forEach.call(board, square => square.addEventListener("click", addToBoard));


const getBoard = () => Array.from(board, cell => cell.innerHTML);

console.log(board);
console.log()

function addToBoard(b){
    const {id} = b.target;
    trg = b.target.innerHTML;
    console.log(b.target);
      
        totalturns++;
        document.getElementById(id).innerHTML = player;

}



function writeToboard(cid){
    document.getElementById(cid).innerHTML = player;
    console.log(player);
}

function displayPlayer(player){
    console.log('it is ' +player+ ' turn!');
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
    winner = logic.checkWinner(getBoard);

}

function checkifdraw(){
    if(totalturns == 9  && checkWinner() == false){
        console.log('it is draw, better luck next time');
        return 1;
    }
}