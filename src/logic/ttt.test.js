const turn = require("./ttt.js");

test("should switch player", () =>{
	expect(turn.playerTurn("x")).toBe("it's o turn");
	
});
test("should return error if it's other than x or o", () =>{
	expect(turn.playerTurn("b")).toBe("x and o only");
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
	expect(turn.pickSquare(1, 1)).toEqual(['X', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 2", () => {
	expect(turn.pickSquare(2, 2)).toEqual(['X', 'O', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 3", () => {
	expect(turn.pickSquare(3, 2)).toEqual(['X', 'O', 'O', '.', '.', '.', '.', '.', '.']);
<<<<<<< HEAD
});
test("checkWinner() turn 1", () => { 
	turn.pickSquare(3, 2);
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 2", () => { 
	turn.pickSquare(5, 2);
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 3", () => { 
	turn.pickSquare(7, 2);
	expect(turn.checkWinner()).toEqual('O');
=======
>>>>>>> acb84902c265126e2b80088064c47eadc161378f
});
