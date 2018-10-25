//const game = require("./ttt");
const tic = require("./ttt.js");

/*
describe('Player Turn Testing', function() {
	
});

describe('Board Testing', function() {
	
});
*/

test("game()", () => {
	expect(tic.game("x")).toBe("it's x turn");
});

test("initializeBoard()", () => {
	expect(tic.initializeBoard()).toEqual(['.', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 1", () => {
	expect(tic.pickSquare(1, 1)).toEqual(['X', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 2", () => {
	expect(tic.pickSquare(2, 2)).toEqual(['X', 'O', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 3", () => {
	expect(tic.pickSquare(3, 2)).toEqual(['X', 'O', 'O', '.', '.', '.', '.', '.', '.']);
});
