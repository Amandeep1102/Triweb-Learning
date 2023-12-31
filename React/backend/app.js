const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const Product=require('./model/product');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("running");
})
app.post('/product', async (req,res)=>{
    try {
        const result = await Product.create(req.body);
        res.send({status:'success'});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error', message:error.message})
    }
})
app.get('/product', async (req,res)=>{
    try {
        console.log("Product fetching");
        const products = await Product.find({});
        res.send({status:'success', data:products});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error', message:error.message})
    }
})

mongoose.connect(process.env.connectionString)
    .then(() => {
        app.listen(3004);
        console.log('Server Connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });