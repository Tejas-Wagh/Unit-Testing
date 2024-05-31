import express from "express";
import z from "zod"


export const app = express();
app.use(express.json());

const inputs = z.object({
    a:z.number(),
    b:z.number()
})

app.post("/sum",(req,res)=>{
const parsedInputs = inputs.safeParse(req.body);

if(!parsedInputs.success){
    return res.status(422).json({
        msg:"Invalid Inputs"
    })
}

const ans = parsedInputs.data.a + parsedInputs.data.b;

res.status(200).json({
    answer : ans
})

})


app.post("/multiply",(req,res)=>{
    const parsedInputs = inputs.safeParse(req.body);

    if(!parsedInputs.success){
        return res.status(422).json({
            msg:"Invalid Inputs"
        })
    }


    const ans = parsedInputs.data.a * parsedInputs.data.b;

    res.status(200).json({
        answer:ans
    })
})

