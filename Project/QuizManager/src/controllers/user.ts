import express from "express";


const registeruser=(req:express.Request,res:express.Response, next:express.NextFunction) => {

    console.log("Registration done");

    res.send("Registration done");
}

export {registeruser}