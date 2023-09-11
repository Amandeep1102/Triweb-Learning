import express from "express";
import {createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz} from '../controllers/quiz';
import { isAuthenticated } from "../middleware/isAuth";

const router=express.Router();

router.post("/",(req,res)=>{
    res.send("created");
});
router.post("/", isAuthenticated, createQuiz);

router.get("/:quizId",(req,res)=>{
    res.send("get quiz");
})
router.get("/:quizId", isAuthenticated, getQuiz);

router.put("/",(req,res)=>{
    res.send("updated");
})
router.put("/", isAuthenticated, updateQuiz);

router.delete("/:quizId",(req,res)=>{
    res.send("deleted");
})
router.delete("/:quizId", isAuthenticated, deleteQuiz);


router.patch("/patch",(req,res)=>{
    res.send("published");
})
router.patch("/patch", isAuthenticated , publishQuiz);

export default router;