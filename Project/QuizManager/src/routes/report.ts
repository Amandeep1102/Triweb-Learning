import express from "express";
import { getReport } from "../controllers/report";
import { isAuthenticated } from "../middleware/isAuth";

const router=express.Router();

router.get("/:reportId?",isAuthenticated, getReport);

export default router;