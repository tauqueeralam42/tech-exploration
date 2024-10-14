const express = require("express");
const {doSomeHeavyTask} = require("./util");

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});