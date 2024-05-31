import {describe, it, expect, vi} from "vitest"
import request from "supertest";
import { app } from "..";
vi.mock("../db.ts");


describe("Sum",()=>{
    it("1 + 2 equals 3", async()=>{
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })

    it("Invalid Inputs", async()=>{
        const res = await request(app).post("/sum").send({
            a:"22",
            b:2
        });

        expect(res.statusCode).toBe(422);
    })

})