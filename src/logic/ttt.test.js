const turn = require("./ttt.js");

test("should switch player", () =>{
	expect(turn.playerTurn("X")).toBe("O");
	
});
test("should return error if it's other than x or o", () =>{
	expect(turn.playerTurn("b")).toBe("X and O only");
});
//const game = require("./ttt");

/*
describe('Player Turn Testing', function() {
	
});

describe('Board Testing', function() {
	
});
*/

test("initializeBoard()", () => {
	expect(turn.initializeBoard()).toEqual(['.', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 1", () => {
	expect(turn.pickSquare(1, 'X')).toEqual(['X', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 2", () => {
	expect(turn.pickSquare(2, 'O')).toEqual(['X', 'O', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 3", () => {
	expect(turn.pickSquare(3, 'O')).toEqual(['X', 'O', 'O', '.', '.', '.', '.', '.', '.']);
});
test("checkWinner() turn 1", () => { 
	turn.pickSquare(3, 'O');
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 2", () => { 
	turn.pickSquare(5, 'O');
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 3", () => { 
	turn.pickSquare(7, 'O');
	expect(turn.checkWinner()).toEqual('O');
});
