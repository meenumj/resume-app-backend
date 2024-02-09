const express=require("express")
const userModel=require("../Models/UserModel")
const bcrypt=require("bcryptjs")

const router=express.Router()

hashPasswordGenerator = async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/signup",async(req,res)=>{
let {data}={"data":req.body}
let Password=data.Password

const hashedPassword=await hashPasswordGenerator(Password)
data.Password=hashedPassword
    let user = new userModel(data)
    let result = await user.save()
    res.json({
        status:"success"
    })

})







module.exports=router