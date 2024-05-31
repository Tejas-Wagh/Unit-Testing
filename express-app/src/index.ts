
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
 
    const answer = req.body.a + req.body.b;

    res.status(200).json({
        answer
    })
});