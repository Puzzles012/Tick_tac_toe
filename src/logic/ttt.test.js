const game = require("./ttt");

it("should say it's x turn", () =>{
	expect(game("x")).toBe("it's x turn");
});
