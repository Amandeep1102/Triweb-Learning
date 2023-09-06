import express from 'express';
import { getUser, registerUser } from '../controllers/user';

const router=express.Router();

router.post('/',registerUser);

router.get('/:userId',getUser);

export default router;