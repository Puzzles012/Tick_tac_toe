const request = require("supertest");
const api = require("./api");
const puppeteer = require("puppeteer");
let browser;
beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });
  afterEach(() => {
    browser.close();
  });
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