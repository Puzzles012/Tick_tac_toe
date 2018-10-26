const request = require("supertest");
const api = require('./api');
//const api = require("../app");
const app = require("../logic/ttt.js");
/*
describe("OPTIONS /api", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).options("/api");
      expect(res.status).toBe(200);
    });
  });

describe("GET /api", () => {
    it("should return 405 status code and an error message", async () => {
        const res = await request(app).get("/api");
        expect(res.status).toBe(405);
        expect(res.body).toHaveProperty("error");
    });
});
describe("Get board", () => {
    it("should return an object with the greeting attribute", async () => {
      const res = await request(app).get("/logic/ttt/player");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("x");
    });
});*/

describe("GET /tic tac toe/:player endpoint", () => {  
    it("should return a 200 OK status code", async () => {    
        const res = await request(api).get("/ttt/_");
        expect(res.status).toBe(200);  
    });  
    it("should return the gameboard", async () => {
        const res = await request(api).get("/ttt/o");    
    });

    it("should display index", async () => {
        const res = await request(api).get("/dist/index");
    });
    
});