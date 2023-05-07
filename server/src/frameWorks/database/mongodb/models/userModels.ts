import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type:String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, "Invalid Email"]
    },
    phone: { 
        type: String,
        unique: true,
        validator: [
            {
                validator: function(value: string ) {
                    return /^\d{10}$/.test(value)
                },
                message: "Invalid Number" 
            }
        ]
    },
    password: { 
        type: String,
    },
    confirmPassword:{
        type:String
    },
    field: {
        type: String,
        requred: true
    },
    subject: {
        type: String,
    },
    course: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
})

userSchema.index({ email: 1})
const userModel =  mongoose.model('users', userSchema)
export default userModel;

