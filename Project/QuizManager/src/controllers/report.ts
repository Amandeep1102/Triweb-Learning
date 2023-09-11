import { Request, Response , NextFunction} from "express-serve-static-core";
import Report from "../models/report";
import ProjectError from "../helper/error";

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{} | []
}

const getReport=async (req:Request, res:Response, next:NextFunction)=>{
   try {
        const reportId=req.params.reportId;
        const report= await Report.findById(req.params.reportId);
        if(!report){
            const err=new ProjectError("Report not found");
            err.statusCode=404;
            throw err;
        }
        if(report.userId.toString()!=req.userId){
            const err=new ProjectError("You are not allowed to visit the scores");
            err.statusCode=405;
            throw err;
        }
        const resp:ReturnResponse={status:"success", message:"Report!", data:{report}};
        res.status(200).send(resp);
   } catch (error) {
        next(error);
   }
}

export {getReport};