import {describe, expect, it} from "@jest/globals"
import request from "supertest"
import { app } from ".."


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


describe("Multiply",()=>{
    it("2 * 3 equals 6", async()=>{
        const res = await request(app).post("/multiply").send({
            a:2,
            b:3
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(6);
    })

    it("Invalid Inputs", async()=>{
        const res = await request(app).post("/sum").send({
            a:"22",
            b:2
        });

        expect(res.statusCode).toBe(422);
    })

})