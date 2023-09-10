import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcryptjs';

import ProjectError from '../helper/error';
import User from '../models/user';
import jwt from 'jsonwebtoken';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{}
}

const registerUser=async (req:Request,res:Response,next:NextFunction)=>{
    let resp:ReturnResponse;
    try {

        const email=req.body.email;
        const name=req.body.name;
        const password= await bcrypt.hash(req.body.password,12);

        const user=new User({email,name,password});
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
        next(error);
    }
}

const loginUser = async (req: Request, res: Response,next:NextFunction) => {

    let resp: ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        // find user with email -- 
        const user = await User.findOne({ email });
        if (!user) {
            resp = { status: "error", message: "User not found", data: {} };
            res.send(resp);
        } else {

            const status = await bcrypt.compare(password, user.password);

            if (status) {
                const  token = jwt.sign({userId:user._id},"secretkey",{expiresIn: "1h"});
                resp = { status: "success", message: "Logged in", data: {token} };
                res.send(resp);
            } else { 
                const err =new ProjectError("User not found");
                err.statusCode = 401;
                throw err;
            }

        }

    } catch (error) {
        next(error);
    }

}


export {registerUser, loginUser };