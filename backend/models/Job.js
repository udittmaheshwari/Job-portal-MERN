import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

title:{
    type:String,
    required:true,
},
type:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
location:{
    type:String,
    required:true,
},
salary:{
    type:String,
    required:true,
},
company:{
    name:String,
    description:String,
    contactEmail:String,
    contactPhone:String,
},



},
{
    timestamps:true,
}

)


const job = mongoose.model("Job", jobSchema);
export default job;