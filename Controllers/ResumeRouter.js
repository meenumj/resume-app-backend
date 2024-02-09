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

router.get("/viewall",async(req,res)=>{
    let result=await resumeModel.find()
    .populate("UserID","Name Mobile Email Age -_id")
    .exec()
    res.json(result)
})


module.exports=router
