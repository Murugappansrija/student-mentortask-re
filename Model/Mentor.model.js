const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
    name :{
        type:String,
        required : true,
        trim: true
    },
    assignedStudent: [{
        type:mongoose.Types.ObjectId,
        ref:"Students"
    }],
    emailid:{
        type: String,
        required: true
    },
    skills:{
        type : String,
         required : true
    },
    
});

module.exports = mongoose.model("Mentors",mentorSchema)