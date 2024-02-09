const mongoose = require("mongoose")

const resumesSchema = new mongoose.Schema(
    {
        UserID:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users" //UserModel collection name
        },
        Profile:{
            type:String,
            required:true
        },
        Education:{
            type:String,
            required:true
        },
        Experience:{
            type:String,
            required:true
        },
        Skills:{
            type:String,
            required:true
        },
        Certification:{
            type:String,
            required:true
        }

}
)

module.exports=mongoose.model("resumes",resumesSchema)