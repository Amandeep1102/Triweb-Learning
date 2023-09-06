import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';

const app = express();

const connectionString = "mongodb+srv://Amandeep_singh:test123@firstproject.t4wd6mg.mongodb.net/myfirstdb?retryWrites=true&w=majority"

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello");
});

app.use('/user',userRoute);

async function connectDb(){
    try {
        await mongoose.connect(connectionString);
        app.listen(3000,() => {
            console.log("Server is running");
        });
    } catch (error) {
        console.log(error);
    }
}

connectDb();
