const express = require('express');
const userRoute = require('./routers/user');
const app = express();

app.use(express.json());

app.use('/user', userRoute);

app.get('/', (req,res) => {
    res.send(`Hello!`);
});



app.listen(3000);