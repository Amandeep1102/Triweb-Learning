const express =require('express');

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("running");
})

// app.post('/product',(req,res)=>{
//     console.log(req.body);
//     res.send({});
// })

app.listen(3002);