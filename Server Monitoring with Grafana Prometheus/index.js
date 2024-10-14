const express = require("express");
const client = require("prom-client");
const {doSomeHeavyTask} = require("./util");

const app = express();
const port = process.env.PORT || 8080;

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

app.get("/", async (req, res) => {
    return res.json({ message: `Hello from Express Server` });
});

app.get("/slow", async (req, res) => {
    try{
        const timeTaken = await doSomeHeavyTask();
        return res.json({
            status: "success",
            message: `Task completed in ${timeTaken} ms`
        });
    }catch(err){
        return res.status(500).json({
            status: "error",
            message: err.message
        });
    }
});

app.get("/metrics", async (req, res) => {
    res.setHeader("Content-Type", client.register.contentType);
    const matrics = await client.register.metrics();
    res.send(matrics);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});