const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userRouter=require("./Controllers/UserRouter")
const resumeRouter=require("./Controllers/ResumeRouter")


const app=express()


app.use(express.json())
app.use(cors())

app.use("/api/user",userRouter)
app.use("/api/resume",resumeRouter)

mongoose.connect("mongodb+srv://meenumj:meenumj167@cluster0.uobnjw6.mongodb.net/resumeDb?retryWrites=true&w=majority",
 {useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})