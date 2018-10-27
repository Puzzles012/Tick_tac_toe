//const logic = require("../logic/ttt.js")
//require('style.css');
//require('index.html');

var totalturns = 0;
let player = 'X';
var xp = 0, op = 0;

const board = document.getElementsByClassName("square");

Array.prototype.forEach.call(board, square => square.addEventListener("click", addToBoard));

const reset = document.getElementById("reset");
reset.addEventListener("click", resetBoard);

const getBoard = () => Array.from(board, cell => cell.innerHTML);

console.log(board);
console.log()

function addToBoard(b){
    const {id} = b.target;
    trg = b.target.innerHTML;
    console.log(b.target);
    if(checkWinner == true){
        return;
    }
    if(trg == " "){    
            totalturns++;
            document.getElementById(id).innerHTML = player;
            if(checkWinner() == true){
            console.log('the winner is' +player);
            document.getElementById('winner').innerHTML = "the winner is " +player;
            
            console.log(totalturns);
            if(checkifdraw() == true){
                document.getElementById('winner').innerHTML = "Draw!";
            }
            else{
                console.log('no winner yet');
                player = playerturn(player);
                displayPlayer(player);
               
            }
        }
    }
}

function resetBoard(){
	totalturns = 0;
	player = 'X';
	document.getElementsByClassName("square").innerHTML = " "
}

function playerturn(player){
    if(player == 'X'){
        return player = 'O';
    }
    else{
        return player = 'X';
    }
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
    var first = document.getElementById('0').innerHTML;
    var second = document.getElementById('1').innerHTML;
    var third = document.getElementById('2').innerHTML;
    var forth = document.getElementById('3').innerHTML;
    var fifth = document.getElementById('4').innerHTML;
    var sixth = document.getElementById('5').innerHTML;
    var seven = document.getElementById('6').innerHTML;
    var eigth = document.getElementById('7').innerHTML;
    var nine = document.getElementById('8').innerHTML;

    if((first == player && second == player && third == player) || (forth == player && fifth == player && sixth == player)||
    (seven == player && eigth == player && nine == player) || (third == player && fifth == player && seven == player) ||
    (first == player && forth == player && seven == player) || (second == player && fifth == player && eigth == player)||
    (third == player && sixth == player && nine == player) || (first == player && fifth == player && nine == player)) {
        return 1;
    }
    else{
        return 0;
    }
}

function checkifdraw(){
    if(totalturns == 9  && checkWinner() == false){
        console.log('it is draw, better luck next time');
        return 1;
    }
}