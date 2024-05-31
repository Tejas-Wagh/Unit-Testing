import express from "express";
import z from "zod";
import { prisma } from "./db";

const inputValidation = z.object({
    a:z.number(),
    b:z.number()
});


export const app = express();
app.use(express.json())

app.post("/sum",async(req,res)=>{
    const parsedIntput = inputValidation.safeParse(req.body);

    if(!parsedIntput.success){
        return res.status(422).json({
            msg:"Invalid Inputs"
        })
    }


    const ans = parsedIntput.data.a + parsedIntput.data.b;

    const result = await prisma.data.create({
        data:{
            a:parsedIntput.data.a,
            b:parsedIntput.data.b,
            answer:ans,
            type:"Sum"
        }
    })

    return res.status(200).json({
        answer:ans,
        id:result.id
    })
})