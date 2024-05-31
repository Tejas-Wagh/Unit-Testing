import { describe, it, expect, vi } from "vitest";
import { app } from "..";
import  request  from "supertest";
import { prisma } from "../__mocks__/db";


vi.mock("../db.ts");

describe("sum",()=>{
    it("1 + 2 equals 3",async()=>{
        prisma.data.create.mockResolvedValue({
            a:1,
            b:2,
            answer:3,
            id:1,
            type:"Sum"
        })

        
        vi.spyOn(prisma.data,"create");

        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });


        expect(prisma.data.create).toHaveBeenCalledWith({
            data:{
                a:1,
                b:2,
                answer:3,
                type:"Sum"
            }
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
        expect(res.body.id).toBe(1);

    })
})