import express from "express";
import { registeruser } from "../controllers/user";

const router = express.Router();

router.post('/', registeruser);

export default router;
