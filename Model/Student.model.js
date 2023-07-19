const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
       
    },
    assignedMentor:{
        type:mongoose.Types.ObjectId,
        ref:"Mentors"
    },
    emailid:{
        type: String,
        required: true
    },
    language:{
        type : String,
         required : true
    },
    program:{
        type : String,
         required : true
    }
});

module.exports = mongoose.model("Students",studentSchema)