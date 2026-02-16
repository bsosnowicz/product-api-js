const request = require("supertest");
const app = require("../app");

describe("API Tests", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBeDefined();
  });

  test("GET /products should return array", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
