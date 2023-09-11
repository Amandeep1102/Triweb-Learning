import express from "express";
const router=express.Router();

router.post("/",(req,res)=>{
    res.send("created");
});

router.get("/:quizId",(req,res)=>{
    res.send("get quiz");
})

router.put("/",(req,res)=>{
    res.send("updated");
})

router.delete("/:quizId",(req,res)=>{
    res.send("deleted");
})

router.patch("/patch",(req,res)=>{
    res.send("published");
})

export default router;