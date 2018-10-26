const Loop = require("./ttt.js")
require('style.css')

var totalturns = 0;
var player = 'X';
var xp = 0, op = 0;

function addPlayerToBoard(){
	var cid = this.id;
	var valid = validMoves(cid);
	if(valid == false){
		
		document.getElementById('legalmove').innerHTML = "Illegal move";
	}
	else{
		document.getElementById(cid).innerHTML = player;
		totalturns++;
		document.getElementById('legalmove').innerHTML = ""
		
		if(checkWinner){
			document.getElementById('winner').innerHTML = "the winner is" +player;
		}
		else{
			player = game.playerTurn(player);
			document.getElementById('turn').innerHTML = player;
		}
	}
}
var board = document.getElementsByClassName("board");/*
for(int i = 0; i < 9; i++){
	board[i].addEventLitsener("click", addPlayerToBoard);
}*/


document.getElementById("reset").addEventListener("click", resetBoard);
function resetBoard(){
	totalturns = 0;
	player = 'X';
	document.getElementById('winner').innerHTML = "";
}