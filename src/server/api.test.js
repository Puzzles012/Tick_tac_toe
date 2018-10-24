const request = require("supertest");
const api = require("./api");

describe("GET /tic tac toe/:player endpoint", () => {  
    it("should return a 200 OK status code", async () => {    
        const res = await request(api).get("/ttt/_");
        expect(res.status).toBe(200);  
    });  
    it("should return the gameboard", async () => {
        const res = await request(api).get("/ttt/x");    
        expect(res.body.game).toBe("it's o turn");  
    });
});