const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hi Hellllo !");
});

app.listen(3000, () => {
    console.log("Server Running");
});