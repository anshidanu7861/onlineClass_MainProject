import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    }
})



export const userRegistrationSchema = mongoose.model('users', userSchema)

