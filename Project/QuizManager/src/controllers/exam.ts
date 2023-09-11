import { Request, Response, NextFunction } from "express";
import Quiz from '../models/quiz';
import ProjectError from "../helper/error";

const startExam=async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const quizId=req.params.quizId;
        const quiz=await Quiz.findById(quizId, {name:1, questions_list:1, is_published:1});
        if(!quiz){
            const err=new ProjectError("Quiz not found");
            err.statusCode=404;
            throw err;
        }
        if(!quiz.is_published){
            const err=new ProjectError("Quiz is not published");
            err.statusCode=405;
            throw err;
        }
        res.send(quiz);
    } catch (error) {
        next(error);
    }
}

const submitExam=async (req:Request, res:Response, next:NextFunction)=>{
    const quizId=req.body.quizId;
    const attempted_questions=req.body.attempted_questions;
    const quiz=await Quiz.findById(quizId, {answers:1});
    if(quiz){
        const answers=quiz.answers;
        res.send(answers);
    }
}

export {startExam, submitExam};