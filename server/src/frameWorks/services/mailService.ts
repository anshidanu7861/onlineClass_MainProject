import nodemailer from 'nodemailer'
import dotenvConfig from '../../configDotenv'

let mailTransporter = nodemailer.createTransport({
    host:dotenvConfig.Nodemailer_host,
    port: 587,
    secure:true,
    auth: {
        user: dotenvConfig.Nodemailer_user,
        pass: dotenvConfig.Nodemailer_pass,
    }
});

export const nodemailerService = async ()=>{
    const inviteLink = async (email:[string]) =>{
        console.log('emial varunnundo');
        
        try{
            const response = await mailTransporter.sendMail({
                from:dotenvConfig.Nodemailer_user,
                to:email,
                subject: "Successfully registered",
                text: "Hello World?",
                html: "<b>Hello World?</b>",
            })
            return "Email has been sent Successfully"
        }catch(err){
            console.log(err);
            
        }
    }

    return {
        inviteLink
    }
}


export type mailServiceType = typeof nodemailerService
