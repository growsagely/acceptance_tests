import request from "supertest";
import app from "../server";

describe("GET /greet/:name", () => {
  test("Hamlet wonders if he should greet Troy", async () => {
    const response = await request(app).get("/greet/Troy");
    expect(response.text).toBe(
      "To greet, or not to greet, Troy? That is the question."
    );
  });
});
