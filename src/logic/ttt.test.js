const game = require("./ttt");
//const throws = require("assert");
it("should switch player", () =>{
	expect(game("x")).toBe("it's o turn");
});
it("should return error if it's other than x or o", () =>{
	//throws(game("b"),/x and o only/);
	expect(game("b")).toBe("x and o only");
});

