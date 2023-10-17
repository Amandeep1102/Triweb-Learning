const express = require("express");

const app = express();

app.get("/", (req, res) => {
    let x = 3;
    let y = x + 6;
    let z = y + x;
    res.send({ status: "success", data: { x, y, z } });
});

app.listen(3000);