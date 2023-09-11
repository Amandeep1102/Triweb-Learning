import express from 'express';
const router=express.Router();
import { startExam, submitExam } from '../controllers/exam';
import { isAuthenticated } from '../middleware/isAuth';

router.get('/:quizId', isAuthenticated, startExam);

router.post("/",isAuthenticated, submitExam);

export default router;