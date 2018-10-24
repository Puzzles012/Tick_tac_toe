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
	expect(tic.initializeBoard()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

