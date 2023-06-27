const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email id")
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10
    },
    message:{
        type:String,
        require:true,
        minLength:3
    },
    date:
    {
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;