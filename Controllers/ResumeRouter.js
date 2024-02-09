const express=require("express")
const resumeModel=require("../Models/ResumeModel")

const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let resume = new resumeModel(data)
    let result=await resume.save()
    res.json({
        status:"success"
    })

})




module.exports=router
