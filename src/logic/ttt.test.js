const turn = require("./ttt.js");
//test on PlayerTurn
test("should switch player", () =>{
	expect(turn.playerTurn("X")).toBe("O");
	
});

//test on get board and reset
test("initializeBoard()", () => {
	expect(turn.initializeBoard()).toEqual(['.', '.', '.', '.', '.', '.', '.', '.', '.']);
});

//test on pickSquare
test("pickSquare() turn 1", () => {
	expect(turn.pickSquare(0, 'X')).toEqual('X');
});

test("pickSquare() turn 2", () => {
	expect(turn.pickSquare(1, 'O')).toEqual('O');
});
//test on checkWinner
test("checkWinner() turn 1", () => { 
	turn.pickSquare(2, 'O');
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 2", () => { 
	turn.pickSquare(4, 'O');
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 3", () => { 
	turn.pickSquare(6, 'O');
	expect(turn.checkWinner()).toEqual('O');
});
