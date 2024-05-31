import  request  from "supertest";
import {describe,it, expect} from "@jest/globals";
import { app } from ".";



describe("sum",()=>{
    it("1 + 2 equals 3", async()=>{
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);

    })
})