import { Request, Response } from "express";
import User from '../models/user';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{}
}

const registerUser=async (req:Request,res:Response)=>{
    let resp:ReturnResponse;
    try {
        const user=new User(req.body);
        const result=await user.save();
        if(!result){
            resp={status:"error",message:"No result found",data:{}};
            res.send(resp);
        }
        else{
            resp={status:"success",message:"Registration Done",data:{userId:result._id}};
            res.send(resp);
        }
        
    } catch (error) {
        //console.log(error);
        resp={status:"error",message:"Something went wrong",data:{}};
        res.status(500).send(resp);
    }
}

const getUser = (req: Request,res:Response)=>{
    console.log("query",req.query);
    console.log("params",req.params);
    res.send("Done");
}

export {registerUser, getUser};