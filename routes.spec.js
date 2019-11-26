"use strict";

const express = require("express");
const app = express();
const request = require("supertest");

const db = {
  get: jest.fn().mockResolvedValue({})
};

describe("GET /test-async ", () => {
  const router = express.Router();
  app.use(router);

  test("stores the data", async () => {
    require("./routes")({ router, db });

    const response = await request(router).get("/test-async");

    expect(response.status).toBe(200);
  });
});

describe("GET /test ", () => {
  const router = express.Router();
  app.use(router);

  test("stores the data", () => {
    require("./routes")({ router, db });

    request(router)
      .get("/test")
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
});
