import express from 'express';
import { getUser, updateUser} from '../controllers/user';
import { isAuthenticated} from '../middleware/isAuth';

const router=express.Router();

router.get('/:userId',isAuthenticated, getUser);

router.put('/',updateUser);

export default router;