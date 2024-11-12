import request from "supertest";
import app from "../app"; // assuming app.js exports your Express app

describe("User API Endpoints", () => {
  // Test for fetching users
  it("should get all users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test for creating a user
  it("should create a new user", async () => {
    const newUser = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };
    const response = await request(app).post("/api/users").send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(newUser.name);
  });

  // Test for handling invalid data
  it("should return 400 for invalid data", async () => {
    const invalidUser = { email: "invalid-email" };
    const response = await request(app).post("/api/users").send(invalidUser);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
