const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello ji i am server");
})

app.get('/hello', (req,res) => {
    res.send("Hello!");
});



app.listen(3000);